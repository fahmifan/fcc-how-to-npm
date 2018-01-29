var filterFile = require('./filterFile.js');

var dir = process.argv[2];
var ext = process.argv[3];

function printFile(err, files) {
  for(file of files) {
    console.log(file);
  }
}

filterFile(dir, ext, printFile);
