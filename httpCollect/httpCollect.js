const bl = require('bl');
const http = require('http');

const url = process.argv[2];

http.get(url, res => {
  res.pipe(bl ( (err, data) => {
    console.log(data.toString().split('').length);
    console.log(data.toString());
  } ))
})
