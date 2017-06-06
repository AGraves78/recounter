const express = require('express');
const server = express();

const port = 6060;

server.use(express.static(__dirname + '/public'));

server.get('/recounter', (request, response) => {
  response.sendFile('public/html/index.html', {root: __dirname});
});
server.listen(port, () => {
  console.log('Now listening on port ', port);
});
