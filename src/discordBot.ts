import { Client } from 'discord.js';
import Musix from './music-quiz/implementations/Musix';
import config from './discordConfig/config';
import Play from './music-quiz/implementations/commands/Play';

export default class DiscordBot {
  private client: Client;

  private prefix = config.prefix;

  private token = config.token;

  private musix = new Musix();

  constructor() {
    this.client = new Client();

    this.client.login(this.token);
  }

  async start(): Promise<void> {
    this.client.once('ready', () => {
      console.log('STARTED');
    });

    this.client.on('message', message => {
      if (message.author.bot) return;

      const flag = Play.getMusixFlag();

      if (flag) {
        this.musix.verifyMusicAndArtist(message);
      }

      if (message.content.startsWith(`${this.prefix}sq`)) {
        this.musix.run(message);

        Play.setMusixFlag(true);
      }
    });
  }
}
