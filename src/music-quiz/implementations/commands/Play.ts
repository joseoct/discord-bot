import { StreamDispatcher } from 'discord.js';
import ytdl from 'ytdl-core';

import ISongDTO from '../../dtos/ISongDTO';

import IQueueConstructor from '../../models/IQueueConstructor';
import Participants from '../services/Participants';

class Play {
  private musixFlag: boolean;

  constructor() {
    this.musixFlag = false;
  }

  public getMusixFlag(): boolean {
    return this.musixFlag;
  }

  public setMusixFlag(value: boolean): void {
    this.musixFlag = value;
  }

  public playSong(queueConstruct: IQueueConstructor): void {
    const { textChannel, voiceChannel, connection } = queueConstruct;

    if (!textChannel || !voiceChannel || !connection) {
      throw new Error('error');
    }

    const song: ISongDTO = queueConstruct.songs[0];

    if (!song) {
      const champion = Participants.getChampionParticipant();

      textChannel.send({
        embed: {
          color: 10181046,
          title: `🥇Campeão: ${champion.name}🥇`,
          description: `com ${champion.points} pontos!!!`,
        },
      });

      voiceChannel.leave();

      this.musixFlag = false;

      return;
    }

    const currentSong = ytdl(song.url, {
      quality: 'lowestaudio',
    });

    const participants = Participants.getParticipants();

    const dispatcher: StreamDispatcher = connection
      .play(currentSong)
      .on('finish', () => {
        textChannel.send({
          embed: {
            color: 10181046,
            title: `**${song.title}**`,
          },
        });

        textChannel.send({
          embed: {
            color: 10181046,
            fields: participants.map(participant => {
              return {
                name: participant.name,
                value: `${participant.points} pontos`,
              };
            }),
          },
        });

        queueConstruct.songs.shift();
        this.playSong(queueConstruct);
      });

    dispatcher.setVolumeLogarithmic(queueConstruct.volume / 5);
  }
}

export default new Play();
