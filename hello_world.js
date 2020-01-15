var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead (200, {'Content-type': 'text/plain'});
    res.end('Hello world!\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');