require('dotenv').config();

let config = {
  BOT: {
    prefix: process.env.PREFIX || ';',
    token: process.env.BOT_TOKEN
  },
  YT: {
    token: process.env.YT_TOKEN
  }
}

module.exports = config;
