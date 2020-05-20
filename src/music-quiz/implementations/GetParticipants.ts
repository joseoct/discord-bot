import { VoiceChannel } from 'discord.js';

import IParticipant from '../models/IParticipant';

class GetParticipants {
  static execute(voiceChannel: VoiceChannel | null): IParticipant[] {
    const mems = voiceChannel?.members;

    if (!mems) {
      throw new Error('error');
    }

    return mems
      .map(mem => {
        return {
          name: mem.user.username,
          points: 0,
          pass: false,
        };
      })
      .filter(mem => mem.name !== 'Musix');
  }
}

export default GetParticipants;
