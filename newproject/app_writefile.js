var fs = require('fs');

const filename = 'log.txt';
const msg = 'Hello World';

fs.writeFile(filename, msg, {encoding: 'utf8'}, function(err) {
  if (err) throw err;

  console.log(filename + ' is saved!!');
});
