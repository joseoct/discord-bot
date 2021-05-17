import { Client } from 'discord.js';
import yts from 'yt-search';
import axios from 'axios';
import fs from 'fs';
import Musix from './music-quiz/implementations/Musix';
import config from './config';

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

    this.client.on('message', async message => {
      if (message.author.bot) return;

      const flagPlayServerId = this.musix.getServerFlagPlay(message.guild?.id);

      if (flagPlayServerId) this.musix.verifyMusicAndArtist(message);

      if (message.content.startsWith(`${this.prefix}sq`) && !flagPlayServerId)
        this.musix.run(message);

      if (message.content.startsWith(`${this.prefix}#`)) {
        const withoutSimbols = message.content.substr(2);
        const messageSplitted = withoutSimbols.split(' - ');

        const config2 = {
          headers: {
            Authorization:
              'Bearer BQDycNqRmUNeh5pKktzsxkFB-4DD9FgkvxTGXjPbbcsr1v7_RTNFxAa9FTZpkwmsl9-ApQ5j_BKv4xxnBnKHWzo15cJfOm_U2I2a8rb3j7Q2ZvZiUATvbdOb9GiS6aWBxl1Z0r4dQOvIFw',
          },
        };

        const response = await axios.get(
          `https://api.spotify.com/v1/artists/${messageSplitted[0]}/top-tracks?market=BR`,
          config2,
        );

        response.data.tracks.pop();
        response.data.tracks.pop();
        response.data.tracks.pop();
        response.data.tracks.pop();
        response.data.tracks.pop();
        response.data.tracks.pop();
        response.data.tracks.forEach(async track => {
          const artist = track.artists[0].name;

          const youtubeMusic = await yts(`${track.name} - ${artist}`);

          const musicArtistUrl = `{ title: "${track.name} - ${artist}", url: "${youtubeMusic.all[0].url}", },\n`;

          fs.appendFile('backup.ts', musicArtistUrl, function (err) {
            if (err) return console.log(err);
            return 1;
          });
        });

        // this.currentSpotify.forEach(async track => {
        //   const youtubeMusic = await yts(
        //     `${track.name} - ${messageSplitted[1]}`,
        //   );

        //   const musicArtistUrl = `
        //   {
        //     title: "${track.name} - ${messageSplitted[1]}",
        //     url: "${youtubeMusic.all[0].url}",
        //   },`;

        //   fs.appendFile('backup.ts', musicArtistUrl, function (err) {
        //     if (err) return console.log(err);
        //     return 1;
        //   });
        // });

        // const withoutSimbols = message.content.substr(2);
        // const messageSplitted = withoutSimbols.split(' - ');
        // const musicAndArtist = `
        // {
        //   title: '${messageSplitted[0]} - ${messageSplitted[1]}',
        //   url: '${messageSplitted[2]}',
        // },
        // `;
        // fs.appendFile('backup.ts', musicAndArtist, function (err) {
        //   if (err) return console.log(err);
        //   return 1;
        // });
      }
    });
  }
}
