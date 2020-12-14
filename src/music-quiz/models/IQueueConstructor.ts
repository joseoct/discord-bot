import {
  TextChannel,
  DMChannel,
  NewsChannel,
  VoiceChannel,
  VoiceConnection,
} from 'discord.js';

import ISongDTO from '../dtos/ISongDTO';
import IParticipant from './IParticipant';

export default interface IQueueConstructor {
  textChannel: TextChannel | DMChannel | NewsChannel | null;
  voiceChannel: VoiceChannel | null | undefined;
  connection: VoiceConnection | undefined;
  songs: ISongDTO[];
  artistFlag: boolean;
  songFlag: boolean;
  volume: number;
  playing: boolean;
  participants: IParticipant[];
}
