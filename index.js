const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello DevOps 6 end ');
});

server.listen(3000, () => {
  console.log('Servidor rodando');
});