const config = require('rekuire')('bot_config')
var SteamCommunity = require('steamcommunity');
var SteamID = SteamCommunity.SteamID;

var sid = new SteamID('[U:1:46143802]');
console.log(sid.toString());
