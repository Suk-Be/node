const http = require('http')

http.createServer((request, response) => {
  // send the HTTP header
  // HTTP Status: 200: ok
  // content type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // send the response body as "Hello World"
  response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.01:8081/')