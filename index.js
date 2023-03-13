const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(3003, () => {
  console.log('Server listening on port 3003');
});