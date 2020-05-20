import { Message } from 'discord.js';
import play from './play';

import ISongDTO from '../dtos/ISongDTO';
import IQueueConstructor from '../models/IQueueConstructor';
import GetParticipants from './GetParticipants';

class Musix {
  private queueConstruct: IQueueConstructor;

  private musics: ISongDTO[];

  constructor() {
    this.queueConstruct = {
      textChannel: null,
      voiceChannel: null,
      connection: undefined,
      songs: [],
      volume: 0,
      playing: true,
    };

    this.musics = [
      {
        title: 'Taylor Swift - Look What You Made Me Do',
        url: 'https://www.youtube.com/watch?v=IGQBtbKSVhY',
      },
      {
        title: 'Katy Perry - Bon Appétit',
        url: 'https://www.youtube.com/watch?v=IGQBtbKSVhY',
      },
    ];
  }

  public async run(message: Message): Promise<void> {
    const voiceChannel = message.member?.voice.channel;

    if (!voiceChannel) {
      message.channel.send('Entre em um chat');
      return;
    }

    const textChannel = message.channel;

    if (!voiceChannel) {
      message.channel.send('ENTRA AI PORRA');
    }

    this.queueConstruct.textChannel = textChannel;
    this.queueConstruct.voiceChannel = voiceChannel;
    this.queueConstruct.songs = this.musics;

    try {
      this.queueConstruct.connection = await voiceChannel?.join();

      play(this.queueConstruct);
    } catch (err) {
      message.channel.send('I NEED PERMITIONS');
    }
  }
}

export default Musix;
