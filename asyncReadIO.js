var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, finishedReading);

function finishedReading(error, resData) {
  if(error) {
    return console.log(error);
  } else {
    var text = resData.toString();
    var matchLineBreak = text.match(/\n/g);
    console.log(matchLineBreak.length);  
  }
}