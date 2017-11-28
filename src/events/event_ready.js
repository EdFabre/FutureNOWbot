// Class logger, managed by loggingManager.js
const logger = require('winston');
const THISFILE = require('path').basename(__filename).toUpperCase();

// NPM Requirements
const StackTrace = require('stacktrace-js');

// Local Requirements
const CONFIG = require('rekuire')('config.json')

module.exports = function(bot) {
  logger.info(`${THISFILE}: Heartbeat received. Currently on ${bot.guilds.size} servers`);

  bot.user.setGame(`Try ${CONFIG["MY_GUILD"].guild_prefix}help`)
    .then(user => logger.info(`${THISFILE}: Set status!`))
    .catch(function(err) {
      logger.error(`${THISFILE}: ${err}`);
    });
  logger.info(`${THISFILE}: Bot loading commands!`);
  logger.info(`${THISFILE}: Bot commands loaded.`);

  bootListeners(bot);
}

function bootListeners(bot) {
  var functionName;
  StackTrace.get()
    .then(function(stack) {
      functionName = `${stack[0].functionName}()`;
    });

  logger.info(`${THISFILE}.${functionName}: Loading additional listeners..`);
  require('rekuire')('listener_mail.js')(bot);
  require('rekuire')('listener_slack.js')(bot);
  require('rekuire')('listener_mp4uploads.js')(bot);
  logger.info(`${THISFILE}.${functionName}: Finished loading additional listeners!`);
}
