const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello DevOps 5 🚀');
});

server.listen(3000, () => {
  console.log('Servidor rodando');
});