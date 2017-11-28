// Class logger, managed by loggingManager.js
const logger = require('winston');
const THISFILE = require('path').basename(__filename).toUpperCase();

// NPM Requirements
const StackTrace = require('stacktrace-js');

// Local Requirements
const config = require('rekuire')('bot_config');
const eventHandler = (evnt) => require('rekuire')(`${evnt}.js`);

module.exports = function(client) {
  logger.info(`${THISFILE}: Main Listener Started.`);

  client.on('ready', function() {
    eventHandler(`event_ready`)(client)
  })

  client.on('message', function(message) {
    eventHandler(`event_message`)(client, message)
  })

  client.on('error', e => {
    eventHandler(`event_error`)(client, e)
  });

  client.on('warn', w => {
    eventHandler(`event_warn`)(client, w)
  });

  client.on('debug', d => {
    eventHandler(`event_debug`)(client, d)
  });

  process.on('exit', (code) => {
    eventHandler(`event_exit`)(client, code)
  });

  process.on('uncaughtException', (ex) => {
    eventHandler(`event_exception`)(client, ex)
  });
}
