/**
 * @Author: Fabre Ed
 * @Date:   2017-11-28T20:04:43-05:00
 * @Email:  edwidgefabre@gmail.com
 * @Filename: index.js
 * @Last modified by:   Fabre Ed
 * @Last modified time: 2017-12-05T22:14:55-05:00
 */



require('dotenv').config();
const Commando = require('discord.js-commando');
const fs = require("fs-extra");

const client = new Commando.Client({
  owner: process.env.BOT_OWNER,
  prefix: process.env.BOT_PREFIX
});

const path = require('path');

client.registry
  // Registers your custom command groups
  .registerGroups([
    ['math', 'Math Commands'],
    ['mod', 'Moderation Commands'],
    ['music', 'Music Commands'],
    ['games', 'Game Commands']
  ])

  // Registers all built-in groups, commands, and argument types
  .registerDefaults()

  // Registers all of your commands in the ./commands/ directory
  .registerCommandsIn(path.join(__dirname, 'commands'));

const sqlite = require('sqlite');

client.setProvider(
  sqlite.open(path.join(__dirname, 'config/settings.sqlite3')).then(db => new Commando
    .SQLiteProvider(db))
).catch(console.error);

client.login(process.env.BOT_MUSIC_TOKEN);
