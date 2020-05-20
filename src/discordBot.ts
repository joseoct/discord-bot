import { Client } from 'discord.js';
import Musix from './music-quiz/implementations/Musix';
import config from './discordConfig/config';

export default class DiscordBot {
  private client: Client;

  private prefix = config.prefix;

  private token = config.token;

  constructor() {
    this.client = new Client();

    this.client.login(this.token);
  }

  async start(): Promise<void> {
    this.client.once('ready', () => {
      console.log('STARTED');
    });

    this.client.on('message', message => {
      if (message.content.startsWith(`${this.prefix}sq`)) {
        const musix = new Musix();

        musix.run(message);
      }
    });
  }
}
