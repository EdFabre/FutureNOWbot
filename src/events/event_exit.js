// Class logger, managed by loggingManager.js
const logger = require('winston');
const THISFILE = require('path').basename(__filename).toUpperCase();

// NPM Requirements
const StackTrace = require('stacktrace-js');

// Local Requirements
const CONFIG = require('rekuire')('config.json')

module.exports = function(bot, status) {
  logStatus(status);
}

function logStatus(status) {
  var functionName;
  StackTrace.get()
    .then(function(stack) {
      functionName = `${stack[0].functionName}()`;
    });

  logger.info(`${THISFILE}.${functionName}: ${status}`);
}
