const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/practice' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Practice is done!');
      } else if (req.url == '/'){
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("Welcome to Re:Coded's Backend Bootcamp!");
      } 
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

module.exports = server;