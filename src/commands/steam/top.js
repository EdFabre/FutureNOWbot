const Commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class SteamTopGamesCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'top-steam',
      aliases: ['tops', 'top-s'],
      group: 'steam',
      memberName: 'top',
      description: 'Shows the top games on steam.',
      details: oneLine `
				This command is used to display the top 10 games on steam.
			`,
      examples: ['top-steam'],
    });
  }

  async run(msg, args) {
    msg.guild.channels
      .get(process.env.BOT_MAIN_CHAT)
      .sendMessage(`steam top`);
    return msg.reply(
      `Gotta get that response in this message`);
  }
}
;
