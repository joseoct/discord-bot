import {
  TextChannel,
  DMChannel,
  NewsChannel,
  VoiceChannel,
  VoiceConnection,
} from 'discord.js';

import ISongDTO from '../dtos/ISongDTO';

export default interface IQueueConstructor {
  textChannel: TextChannel | DMChannel | NewsChannel | null;
  voiceChannel: VoiceChannel | null | undefined;
  connection: VoiceConnection | undefined;
  songs: ISongDTO[];
  volume: number;
  playing: boolean;
}
