import { Message } from 'discord.js';
import stringSimilarity from 'string-similarity';

import Commands from './commands/Commands';

import IQueueConstructor from '../models/IQueueConstructor';

import Participants from './services/Participants';

import removeAcento from '../utils/removeAcento';
import generateDistinctArray from '../utils/selectMusics';

import musics from '../musics/musics';

class Musix {
  private queue: Map<string | undefined, IQueueConstructor>;

  constructor() {
    this.queue = new Map();
  }

  public getServerFlagPlay(serverId: string | undefined): boolean | undefined {
    return this.queue.get(serverId)?.playing;
  }

  public async run(message: Message): Promise<void> {
    const queueConstruct: IQueueConstructor = {
      textChannel: null,
      voiceChannel: null,
      connection: undefined,
      songs: [],
      artistFlag: false,
      songFlag: false,
      volume: 5,
      playing: false,
      participants: [],
    };

    this.queue.set(message.guild?.id, queueConstruct);

    const voiceChannel = message.member?.voice.channel;
    const textChannel = message.channel;

    if (!voiceChannel || !textChannel) {
      message.channel.send('Entre em um chat');
      return;
    }

    queueConstruct.textChannel = textChannel;
    queueConstruct.voiceChannel = voiceChannel;
    queueConstruct.songs = generateDistinctArray(musics);
    queueConstruct.participants = Participants.setParticipants(voiceChannel);
    console.log(queueConstruct.songs);

    try {
      queueConstruct.connection = await voiceChannel?.join();
      queueConstruct.playing = true;

      Commands.play(queueConstruct);
    } catch (err) {
      message.channel.send('I NEED PERMITIONS');
    }
  }

  public verifyMusicAndArtist(message: Message): void {
    const voiceChannel = message.member?.voice.channel;

    if (!voiceChannel) {
      message.channel.send(`${message.author}, entre em um chat para jogar!`);
      return;
    }

    const messageLowerCased = message.content.toLowerCase();

    const messageFormatted = removeAcento(messageLowerCased);

    const constructor = this.queue.get(message.guild?.id);

    if (constructor) {
      const song = constructor.songs[0].title.split(' - ');

      const artist = removeAcento(song[0].toLowerCase());
      const music = removeAcento(song[1].toLowerCase());

      const artistSimilarity = stringSimilarity.compareTwoStrings(
        messageFormatted,
        artist,
      );

      const songSimilarity = stringSimilarity.compareTwoStrings(
        messageFormatted,
        music,
      );

      if (artistSimilarity >= 0.85 && constructor.artistFlag === false) {
        message.react('🎤');
        constructor.artistFlag = true;

        constructor.participants.find(participant => {
          if (participant.name === message.author.username) {
            participant.points += 1;
            return participant;
          }
          return 1;
        });
      } else if (songSimilarity >= 0.85 && constructor.songFlag === false) {
        message.react('🎶');
        constructor.songFlag = true;

        constructor.participants.find(participant => {
          if (participant.name === message.author.username) {
            participant.points += 1;
            return participant;
          }
          return 1;
        });
      } else {
        message.react('❌');
      }

      if (constructor.artistFlag && constructor.songFlag) {
        Commands.skip(constructor);
        constructor.artistFlag = false;
        constructor.songFlag = false;
      }
    }
  }
}

export default Musix;
