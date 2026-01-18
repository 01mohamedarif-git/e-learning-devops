const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('E-Learning Platform - DevOps Auto Scaling Demo version 2');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
