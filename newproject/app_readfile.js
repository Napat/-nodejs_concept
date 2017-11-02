var fs = require('fs');

const filename = 'log.txt';

fs.readFile(filename, {encoding: 'utf8'}, function(err, data) {
  if (err) throw err;

  console.log(filename + ' data: ' + data);
});
