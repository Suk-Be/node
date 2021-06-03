/*
Node.js provides an http module which can be used to create an HTTP client of a server.
Following is the bare minimum structure of the HTTP server which listens at 8081 port.
 */

const http = require('http')
const fs = require('fs')
const url = require('url')

// create a server
http.createServer((request, response) => {
  // parse the request containing file name
  const pathname = url.parse(request.url).pathname

  // Print the name of the file for which the request is made
  console.log('Request for ' + pathname + ' received')

  // Read the requested file content from file system
  fs.readFile(pathname.substr(1), (err, data) => {
    if (err) {
      console.log(err)

      // HTTP Status: 404 : Not found
      response.writeHead(404, {'Content-Type': 'text/html' })
    } else {
      // Page found
      // HTTP status: 200 : OK
      response.writeHead(200, {'Content-Type': 'text/html'})

      // Write the content of the file in the response body
      response.write(data.toString())
    }

    // Send the response body
    response.end()
  })
}).listen(8081)

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
// for the simple demostration of webserver html pages must be in the same folder
// in this case: index.html can be called with
// http://127.0.0.1:8081/index.html