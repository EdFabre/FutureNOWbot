// Class logger, managed by loggingManager.js
const logger = require('winston');
const THISFILE = require('path').basename(__filename).toUpperCase();

// NPM Requirements
const StackTrace = require('stacktrace-js');

// Local Requirements
const CONFIG = require('rekuire')('config.json')
const loadCommand = (file) => require('rekuire')(`cmd_${file}.js`)
const commandList = require('rekuire')('commandList.json')
const MY_GUILD = CONFIG.MY_GUILD;

module.exports = function(bot, message) {
  parseMessage(bot, message);
}

function parseMessage(bot, message) {
  var functionName;
  StackTrace.get()
    .then(function(stack) {
      functionName = `${stack[0].functionName}()`;
    });

  msg = message.content.trim();
  // Check if the message is a command.
  if (msg.startsWith(MY_GUILD.guild_prefix)) {
    const command = msg.split(/[ \n]/)[0].substring(MY_GUILD.guild_prefix.length).toLowerCase().trim();
    const suffix = msg.substring(MY_GUILD.guild_prefix.length + command.length).trim();
    // for regular commands
    for (var cmd in commandList) {
      if (cmd === command) {
        logCommand(message, command);
        return loadCommand(command)(bot, message, suffix);
      }
    }
  }
}

function logCommand(message, command) {
  var functionName;
  StackTrace.get()
    .then(function(stack) {
      functionName = `${stack[0].functionName}()`;
    });

  return logger.info(`${THISFILE}.${functionName}: Commands: (${message.guild.id}, ${message.guild.name}) => Used Command: ${command}.`)
}
