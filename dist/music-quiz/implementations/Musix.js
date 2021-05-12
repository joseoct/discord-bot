"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Commands_1 = __importDefault(require("./commands/Commands"));
var Participants_1 = __importDefault(require("./services/Participants"));
var removeAcento_1 = __importDefault(require("../utils/removeAcento"));
var selectMusics_1 = __importDefault(require("../utils/selectMusics"));
var musics_1 = __importDefault(require("../musics/musics"));
var Musix = /** @class */ (function () {
    function Musix() {
        this.queue = new Map();
    }
    Musix.prototype.getServerFlagPlay = function (serverId) {
        var _a;
        return (_a = this.queue.get(serverId)) === null || _a === void 0 ? void 0 : _a.playing;
    };
    Musix.prototype.run = function (message) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var queueConstruct, voiceChannel, textChannel, _c, err_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        queueConstruct = {
                            textChannel: null,
                            voiceChannel: null,
                            connection: undefined,
                            songs: [],
                            artistFlag: false,
                            songFlag: false,
                            volume: 5,
                            playing: false,
                            participants: [],
                        };
                        this.queue.set((_a = message.guild) === null || _a === void 0 ? void 0 : _a.id, queueConstruct);
                        voiceChannel = (_b = message.member) === null || _b === void 0 ? void 0 : _b.voice.channel;
                        textChannel = message.channel;
                        if (!voiceChannel || !textChannel) {
                            message.channel.send('Entre em um chat');
                            return [2 /*return*/];
                        }
                        queueConstruct.textChannel = textChannel;
                        queueConstruct.voiceChannel = voiceChannel;
                        queueConstruct.songs = selectMusics_1.default(musics_1.default);
                        queueConstruct.participants = Participants_1.default.setParticipants(voiceChannel);
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        _c = queueConstruct;
                        return [4 /*yield*/, (voiceChannel === null || voiceChannel === void 0 ? void 0 : voiceChannel.join())];
                    case 2:
                        _c.connection = _d.sent();
                        queueConstruct.playing = true;
                        Commands_1.default.play(queueConstruct);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _d.sent();
                        message.channel.send('I NEED PERMITIONS');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Musix.prototype.verifyMusicAndArtist = function (message) {
        var _a, _b;
        var voiceChannel = (_a = message.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
        if (!voiceChannel) {
            message.channel.send(message.author + ", entre em um chat para jogar!");
            return;
        }
        var messageLowerCased = message.content.toLowerCase();
        var messageFormatted = removeAcento_1.default(messageLowerCased);
        var constructor = this.queue.get((_b = message.guild) === null || _b === void 0 ? void 0 : _b.id);
        if (constructor) {
            var song = constructor.songs[0].title.split(' - ');
            var artist = removeAcento_1.default(song[0].toLowerCase());
            var music = removeAcento_1.default(song[1].toLowerCase());
            if (messageFormatted === artist && constructor.artistFlag === false) {
                message.react('🎤');
                constructor.artistFlag = true;
                constructor.participants.find(function (participant) {
                    if (participant.name === message.author.username)
                        participant.points += 1;
                    return participant;
                });
            }
            else if (messageFormatted === music && constructor.songFlag === false) {
                message.react('🎶');
                constructor.songFlag = true;
                constructor.participants.find(function (participant) {
                    if (participant.name === message.author.username)
                        participant.points += 1;
                    return participant;
                });
            }
            else {
                message.react('❌');
            }
            if (constructor.artistFlag && constructor.songFlag) {
                Commands_1.default.skip(constructor);
                constructor.artistFlag = false;
                constructor.songFlag = false;
            }
        }
    };
    return Musix;
}());
exports.default = Musix;
