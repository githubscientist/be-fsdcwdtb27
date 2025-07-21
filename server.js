// import the http module
const http = require('http');

// create a server
// createServer method takes a callback function -> request listener
// createServer method returns an instance of the server
const server = http.createServer((request, response) => {
    response.end('Hello, NodeJS!');
});

// listen on port 3001
server.listen(3001, 'localhost', () => {
    console.log('Server is running on http://localhost:3001');
});