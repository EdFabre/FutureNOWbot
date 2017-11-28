// Class logger, managed by loggingManager.js
const logger = require('winston');
const THISFILE = require('path').basename(__filename).toUpperCase();

// Local Requirements
const CONFIG = require('rekuire')('config.json')

module.exports = function(bot, status) {
  logStatus(status);
}

function logStatus(status) {
  if (status.code == 'ECONNRESET') {
    logger.error(`${THISFILE}: Bot Caught : ${status}`);
    return;
  } else {
    logger.error(`${THISFILE}: Bot Caught : ${status}`);
  }
}
