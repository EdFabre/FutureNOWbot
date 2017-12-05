// Class logger, managed by loggingManager.js
const logger = require('winston');
const THISFILE = require('path').basename(__filename).toUpperCase();

// NPM Requirements
const StackTrace = require('stacktrace-js');

// Local Requirements
const CONFIG = require('rekuire')('config.json')
const eventHandler = (evnt) => require('rekuire')(`${evnt}.js`)

module.exports = function(bot) {
  logger.info(`${THISFILE}: Main Listener Started.`);

  bot.on('ready', function() {
    eventHandler(`event_ready`)(bot)
  })

  bot.on('message', function(message) {
    eventHandler(`event_message`)(bot, message)
  })

  bot.on('error', e => {
    eventHandler(`event_error`)(bot, e)
  });

  bot.on('warn', w => {
    eventHandler(`event_warn`)(bot, w)
  });

  bot.on('debug', d => {
    eventHandler(`event_debug`)(bot, d)
  });

  process.on('exit', (code) => {
    eventHandler(`event_exit`)(bot, code)
  });

  process.on('uncaughtException', (ex) => {
    eventHandler(`event_exception`)(bot, ex)
  });
}
