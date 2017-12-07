const cryptoRandomString = require('crypto-random-string');

let id = cryptoRandomString(5);

let cmd = `link-steam nub4athene [${id}]`;

parseCommand(cmd)

function parseCommand(command) {
  var cmdParsed = command.split(' ');
  var cmdLength = cmdParsed.length - 1;
  var idRegExp = /\[(.*?)\]/;
  var matches = idRegExp.exec(cmdParsed[cmdLength]);

  var cmd = cmdParsed[0];
  var cmdID = matches[1];

  var cmdContent = cmdParsed;
  // var cmdContent = cmdContent.splice(0, 1);

  console.log(cmd);
  console.log(cmdID);
  console.log(cmdContent);
}
