const Commando = require('discord.js-commando');
const fs = require("fs-extra");
const config = require('rekuire')('bot_config')

const client = new Commando.Client({
  owner: '170702846260412416'
});

const path = require('path');

client.registry
  // Registers your custom command groups
  .registerGroups([
    ['admins', 'Admins'],
    ['mods', 'Moderators'],
    ['vets', 'Veterans'],
    ['math', 'Math'],
    ['regs', 'Regular Users']
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

client.login(config.BOT.bot_token);
