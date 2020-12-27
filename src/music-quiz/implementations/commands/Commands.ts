import { StreamDispatcher } from 'discord.js';
import ytdl from 'ytdl-core';

import ISongDTO from '../../dtos/ISongDTO';

import IQueueConstructor from '../../models/IQueueConstructor';
import Participants from '../services/Participants';

class Commands {
  public skip(queueConstruct: IQueueConstructor): void {
    const { connection } = queueConstruct;

    // eslint-disable-next-line no-unused-expressions
    connection?.dispatcher.end();
  }

  public play(queueConstruct: IQueueConstructor): void {
    const { textChannel, voiceChannel, connection } = queueConstruct;

    if (!textChannel || !voiceChannel || !connection) {
      throw new Error('error');
    }

    const song: ISongDTO = queueConstruct.songs[0];

    if (!song) {
      const champion = Participants.getChampionParticipant();
      queueConstruct.playing = false;

      textChannel.send({
        embed: {
          color: 10181046,
          title: `🥇Campeão: ${champion.name}🥇`,
          description: `com ${champion.points} pontos!!!`,
        },
      });

      voiceChannel.leave();

      return;
    }

    const participants = Participants.getParticipants();

    const dispatcher: StreamDispatcher = connection
      .play(
        ytdl(song.url, {
          filter: 'audioonly',
        }),
        {
          seek: 50,
        },
      )
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

        queueConstruct.artistFlag = false;
        queueConstruct.songFlag = false;

        queueConstruct.songs.shift();
        this.play(queueConstruct);
      });

    setTimeout(() => {
      dispatcher.end();
    }, 30000);

    dispatcher.setVolumeLogarithmic(queueConstruct.volume / 5);
  }
}

export default new Commands();
