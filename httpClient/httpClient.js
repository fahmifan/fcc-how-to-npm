var http = require('http');

var url = process.argv[2];

http.get(url, res => {
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', chunk => {rawData += `${chunk}\n`} );
  res.on('end', () => {
    try {
      console.log(rawData);
    } catch(err) {
      console.log(err.message);
    }
  });
}).on('error', err => {
  console.error(`Got error: ${err.message}`);
})