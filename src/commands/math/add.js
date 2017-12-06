/**
 * @Author: Fabre Ed
 * @Date:   2017-12-05T21:56:18-05:00
 * @Email:  edwidgefabre@gmail.com
 * @Filename: add.js
 * @Last modified by:   Fabre Ed
 * @Last modified time: 2017-12-05T22:28:22-05:00
 */



const Commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class AddNumbersCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'add-numbers',
      aliases: ['add'],
      group: 'math',
      memberName: 'add',
      description: 'Adds numbers together.',
      details: oneLine `Simple addition command.`,
      examples: ['add-numbers 42 1337'],
      args: [{
        key: 'numbers',
        label: 'number',
        prompt: 'What numbers would you like to add? Every message you send will be interpreted as a single number.',
        type: 'float',
        infinite: true
      }]
    });
  }

  async run(msg, args) {
    console.log(msg);
    console.log(args);
    const total = args.numbers.reduce((prev, arg) => prev + parseFloat(
        arg), 0);
    return msg.reply(`${args.numbers.join(' + ')} = **${total}**`);
  }
}
