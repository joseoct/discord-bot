"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateDistinctArray(musics) {
    var nums = new Set();
    var arrMusics = [];
    while (nums.size !== 10) {
        nums.add(Math.floor(Math.random() * 100) + 1);
    }
    nums.forEach(function (item) { return arrMusics.push(musics[item]); });
    return arrMusics;
}
exports.default = generateDistinctArray;
