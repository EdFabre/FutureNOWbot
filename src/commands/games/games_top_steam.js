const Commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const cryptoRandomString = require('crypto-random-string');

module.exports = class TopSteamGamesCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'top-steam',
      aliases: ['tops', 'top-s'],
      group: 'game',
      memberName: 'top',
      description: 'Shows the top games on steam.',
      details: oneLine `
				This command is used to display the top 10 games on steam.
			`,
      examples: ['top-steam'],
    });
  }

  async run(msg, args) {
    let botChatChannel = msg.guild.channels.get(process.env.BOT_MAIN_CHAT);
    let collector = botChatChannel.createCollector(m => m);

    botChatChannel.send(`top-steam`);

    collector.on('message', m => {
      if (m.content.startsWith()) {
        return msg.reply(
          `top steam command complete`);
      }
    });

  }
}
;
