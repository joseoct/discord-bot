"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ytdl_core_1 = __importDefault(require("ytdl-core"));
var Participants_1 = __importDefault(require("../services/Participants"));
var Commands = /** @class */ (function () {
    function Commands() {
    }
    Commands.prototype.skip = function (queueConstruct) {
        var connection = queueConstruct.connection;
        // eslint-disable-next-line no-unused-expressions
        connection === null || connection === void 0 ? void 0 : connection.dispatcher.end();
    };
    Commands.prototype.play = function (queueConstruct) {
        var _this = this;
        var textChannel = queueConstruct.textChannel, voiceChannel = queueConstruct.voiceChannel, connection = queueConstruct.connection;
        if (!textChannel || !voiceChannel || !connection) {
            throw new Error('error');
        }
        var song = queueConstruct.songs[0];
        if (!song) {
            var champion = Participants_1.default.getChampionParticipant();
            queueConstruct.playing = false;
            textChannel.send({
                embed: {
                    color: 10181046,
                    title: "\uD83E\uDD47Campe\u00E3o: " + champion.name + "\uD83E\uDD47",
                    description: "com " + champion.points + " pontos!!!",
                },
            });
            voiceChannel.leave();
            return;
        }
        var participants = Participants_1.default.getParticipants();
        var dispatcher = connection
            .play(ytdl_core_1.default(song.url, {
            filter: 'audioonly',
        }), {
            seek: 50,
        })
            .on('finish', function () {
            textChannel.send({
                embed: {
                    color: 10181046,
                    title: "**" + song.title + "**",
                },
            });
            textChannel.send({
                embed: {
                    color: 10181046,
                    fields: participants.map(function (participant) {
                        return {
                            name: participant.name,
                            value: participant.points == 1 ? participant.points + " ponto" : participant.points + " pontos",
                        };
                    }),
                },
            });
            queueConstruct.artistFlag = false;
            queueConstruct.songFlag = false;
            queueConstruct.songs.shift();
            _this.play(queueConstruct);
        });
        setTimeout(function () {
            dispatcher.end();
        }, 30000);
        dispatcher.setVolumeLogarithmic(queueConstruct.volume / 5);
    };
    return Commands;
}());
exports.default = new Commands();
