// to run this script: `node <script.js> <replay.slp>
const util = require("util");

const { SlippiGame } = require("@slippi/slippi-js");

const game = new SlippiGame(process.argv[2]);

// Get game settings – stage, characters, etc
const settings = game.getSettings();
const gecko = game.getGeckoList();
const frames = game.getFrames();
const end = game.getGameEnd();
const metadata = game.getMetadata();

console.log(settings.randomSeed);
console.log(util.inspect(metadata.playedOn, false, null, true));
//console.log(util.inspect(frames[-123], false, null, true));
