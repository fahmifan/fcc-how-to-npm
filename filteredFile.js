var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var extFilter = process.argv[3];

function extension(file) {
  var extName = path.extname(file);
  return extName === '.' + extFilter;
}

fs.readdir(dir, function printFilesList(err, files) {
  files.filter(extension).forEach(file => {console.log(file)})
})

