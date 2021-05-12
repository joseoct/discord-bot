"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Participant = /** @class */ (function () {
    function Participant() {
        this.participants = [];
    }
    Participant.prototype.getParticipants = function () {
        return this.participants;
    };
    Participant.prototype.setParticipants = function (voiceChannel) {
        var mems = voiceChannel === null || voiceChannel === void 0 ? void 0 : voiceChannel.members;
        if (!mems) {
            throw new Error('error');
        }
        this.participants = mems
            .map(function (mem) {
            return {
                name: mem.user.username,
                points: 0,
                pass: false,
            };
        })
            .filter(function (mem) { return mem.name !== 'Musix'; });
        return this.participants;
    };
    Participant.prototype.sumParticipantPoints = function (payload) {
        var findParticipant = this.participants.find(function (participant) { return participant.name === payload; });
        if (!findParticipant) {
            throw new Error('Participant not found');
        }
        findParticipant.points += 1;
    };
    Participant.prototype.getChampionParticipant = function () {
        var points = this.participants.map(function (participant) { return participant.points; });
        var maxPoint = Math.max.apply(null, points);
        var champion = this.participants.find(function (participant) { return participant.points === maxPoint; });
        if (!champion) {
            throw new Error('Participant not found');
        }
        return champion;
    };
    return Participant;
}());
exports.default = new Participant();
