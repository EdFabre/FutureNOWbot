const config = require('rekuire')('bot_config')
var SteamCommunity = require('steamcommunity');
var community = new SteamCommunity();

var SteamID = SteamCommunity.SteamID;
//
// var sid = new SteamID('[U:1:46143802]');
community.getSteamUser('nub4athene', (err, res) => {
  console.log(res);
});


// console.log(sid.toString());
