import { Message } from 'discord.js';
import Play from './commands/Play';

import ISongDTO from '../dtos/ISongDTO';
import IQueueConstructor from '../models/IQueueConstructor';
import removeAcento from '../../utils/removeAcento';
import Participants from './services/Participants';

class Musix {
  private queueConstruct: IQueueConstructor;

  private musics: ISongDTO[];

  private artistFlag: boolean;

  private songFlag: boolean;

  constructor() {
    this.queueConstruct = {
      textChannel: null,
      voiceChannel: null,
      connection: undefined,
      songs: [],
      volume: 5,
      playing: true,
    };

    this.musics = [
      {
        title: 'T - L',
        url: 'https://www.youtube.com/watch?v=iZq0u3quAqo',
      },
      {
        title: 'K - B',
        url: 'https://www.youtube.com/watch?v=jHs9VKS_DGg',
      },
    ];

    this.artistFlag = false;
    this.songFlag = false;
  }

  public async run(message: Message): Promise<void> {
    const voiceChannel = message.member?.voice.channel;

    if (!voiceChannel) {
      message.channel.send('Entre em um chat');
      return;
    }

    const textChannel = message.channel;

    if (!textChannel) {
      message.channel.send('ENTRA AI PORRA');
    }

    this.queueConstruct.textChannel = textChannel;
    this.queueConstruct.voiceChannel = voiceChannel;
    this.queueConstruct.songs = this.musics;

    Participants.setParticipants(voiceChannel);

    try {
      this.queueConstruct.connection = await voiceChannel?.join();

      Play.playSong(this.queueConstruct);
    } catch (err) {
      message.channel.send('I NEED PERMITIONS');
    }
  }

  public verifyMusicAndArtist(message: Message): void {
    const voiceChannel = message.member?.voice.channel;

    if (!voiceChannel) {
      message.channel.send('Entre em um chat');
      return;
    }

    const messageLowerCased = message.content.toLowerCase();

    const messageFormatted = removeAcento(messageLowerCased);

    const args = this.musics[0].title.split(' - ');

    const artist = removeAcento(args[0].toLowerCase());
    const music = removeAcento(args[1].toLowerCase());

    if (messageFormatted === artist && !this.artistFlag) {
      message.react('🎤');
      this.artistFlag = true;

      Participants.sumParticipantPoints(message.author.username);
    } else if (messageFormatted === music && !this.songFlag) {
      message.react('🎶');
      this.songFlag = true;

      Participants.sumParticipantPoints(message.author.username);
    } else {
      message.react('❌');
    }
  }
}

export default Musix;
