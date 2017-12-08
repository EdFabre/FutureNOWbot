const Utility = require('fnc-utils');

// Example Discord command
var command = 'test-command -f some content'

/* From the Master Bot */
var masterCommand = Utility.createBotCommand(command);
// {"name":"test-command","id":"12345","flags":[ f ],"content":"some content"}
console.log(masterCommand);

/* From the Slave Bot */
var slaveCommand = Utility.parseBotCommand(masterCommand);
// { name: 'test-command',
//   id: '12345',
//   flags: [ f ],
//   content: 'some content' }

console.log(slaveCommand);
