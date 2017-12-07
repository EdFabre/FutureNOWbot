const Commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class SteamLinkCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'link-steam',
      aliases: ['links', 'link-s'],
      group: 'steam',
      memberName: 'link',
      description: 'Links your discord name to your steam name.',
      details: oneLine `
				This command is used to use the steam functions of this server.
			`,
      examples: ['link-steam nub4athene'],

      args: [{
        key: 'steamname',
        prompt: 'What is your steam username.',
        type: 'string',
        infinite: false
      }]
    });
  }

  async run(msg, args) {
    msg.guild.channels
      .get(process.env.BOT_MAIN_CHAT)
      .sendMessage(`Linking ${args.steamname}`);
    return msg.reply(
      `It's possible that you are linked... Highly possible`);
  }
}
;
