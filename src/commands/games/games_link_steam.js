const Commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class LinkSteamCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'link-steam',
      aliases: ['link-s'],
      group: 'games',
      memberName: 'link-steam',
      description: 'Links your discord name to your steam name.',
      details: oneLine `
			   By registering your steam name, it is easier to use other game
         commands.
			`,
      examples: ['link-steam billybob'],

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
      .sendMessage(`Linking Steam User ${args.steamname} to ${msg.author}`);

    return msg.reply(
      `It's possible that you are linked... Highly possible`);
  }
}
;
