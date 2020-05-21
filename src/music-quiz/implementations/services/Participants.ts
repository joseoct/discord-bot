import { VoiceChannel } from 'discord.js';

import IParticipant from '../../models/IParticipant';

class Participant {
  private participants: IParticipant[];

  constructor() {
    this.participants = [];
  }

  public getParticipants(): IParticipant[] {
    return this.participants;
  }

  public setParticipants(voiceChannel: VoiceChannel | null): void {
    const mems = voiceChannel?.members;

    if (!mems) {
      throw new Error('error');
    }

    this.participants = mems
      .map(mem => {
        return {
          name: mem.user.username,
          points: 0,
          pass: false,
        };
      })
      .filter(mem => mem.name !== 'Musix');
  }

  public sumParticipantPoints(payload: string): void {
    const findParticipant = this.participants.find(
      participant => participant.name === payload,
    );

    if (!findParticipant) {
      throw new Error('Participant not found');
    }

    findParticipant.points += 1;
  }

  public getChampionParticipant(): IParticipant {
    const points = this.participants.map(participant => participant.points);

    const maxPoint = Math.max.apply(null, points);

    const champion = this.participants.find(
      participant => participant.points === maxPoint,
    );

    if (!champion) {
      throw new Error('Participant not found');
    }

    return champion;
  }
}

export default new Participant();
