// to run this script: `node <script.js> <replay.slp>
const util = require("util");

const { SlippiGame } = require("@slippi/slippi-js");

const game = new SlippiGame(process.argv[2]);

// Get game settings – stage, characters, etc
const start = game.getSettings();
const gecko = game.getGeckoList();
const frames = game.getFrames();
const end = game.getGameEnd();
const metadata = game.getMetadata();

console.log(util.inspect(start, false, null, true));
console.log(util.inspect(frames, false, null, true));
//console.log(util.inspect(end, false, null, true));
//console.log(util.inspect(metadata, false, null, true));
