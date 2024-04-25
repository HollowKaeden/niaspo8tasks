const http = require('http');
const fs = require('fs');
const PORT = 1234;

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("File not found!");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
});

server.listen(PORT, () => {
	console.log('Server running at http://localhost:' + PORT + '/');});