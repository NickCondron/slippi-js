const util = require("util");

const { SlippiGame } = require("@slippi/slippi-js");

//const game = new SlippiGame("long_name_tag.slp");
const game = new SlippiGame(process.argv[2]);

// Get game settings – stage, characters, etc
const settings = game.getSettings();
const metadata = game.getMetadata();
//const frames = game.getFrames();

console.log(settings.randomSeed);
console.log(util.inspect(metadata.playedOn, false, null, true));
//console.log(util.inspect(frames[-123], false, null, true));
