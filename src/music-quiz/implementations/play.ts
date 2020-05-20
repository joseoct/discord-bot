import { StreamDispatcher } from 'discord.js';
import ytdl from 'ytdl-core';

import ISongDTO from '../dtos/ISongDTO';

import IQueueConstructor from '../models/IQueueConstructor';
import GetParticipants from './GetParticipants';

function play(queueConstruct: IQueueConstructor): void {
  const { textChannel, voiceChannel, connection } = queueConstruct;

  if (!textChannel || !voiceChannel || !connection) {
    throw new Error('error');
  }

  const song: ISongDTO = queueConstruct.songs[0];

  if (!song) {
    voiceChannel.leave();

    return;
  }

  const currentSong = ytdl(song.url, {
    quality: 'lowestaudio',
  });

  const participants = GetParticipants.execute(voiceChannel);

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
      play(queueConstruct);
    });

  dispatcher.setVolumeLogarithmic(queueConstruct.volume / 5);
}

export default play;
