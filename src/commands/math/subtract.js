const Commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class SubNumbersCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'sub-numbers',
      aliases: ['sub', 'sub-nums'],
      group: 'math',
      memberName: 'sub',
      description: 'Subtracts numbers from each other.',
      details: oneLine `
				This is an incredibly useful command that finds the difference of numbers.
			`,
      examples: ['sub-numbers 1337 42'],

      args: [{
        key: 'numbers',
        label: 'number',
        prompt: 'What numbers would you like to subtract? Every message you send will be interpreted as a single number.',
        type: 'float',
        infinite: true
      }]
    });
  }

  async run(msg, args) {
    const total = args.numbers.reduce((prev, arg) => prev - parseFloat(
        arg), 0);
    return msg.reply(`${args.numbers.join(' - ')} = **${total}**`);
  }
}
;
