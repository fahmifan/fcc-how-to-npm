var fs = require('fs');
var filePath = process.argv[2];
var fileBuff =  fs.readFileSync(filePath);
var regex = /\n/g;
var lineBreakArray = fileBuff.toString().match(regex);

console.log(lineBreakArray.length);
