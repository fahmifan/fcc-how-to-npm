var fs = require('fs');
var path = require('path');

module.exports = function filter(dir, ext, callback) {
  fs.readdir(dir, printFilesList = (err, files) => {
    if(err){return callback(err, null)}
    
    var filterdFiles = files.filter(file => {
      return path.extname(file) === '.' + ext;
    });
    
    callback(null, filterdFiles)
  })
}