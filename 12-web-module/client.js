/*
A web client can be created using http module. Let's check the following example.
 */
const htttp = require('http')

// Options to be used by request
const options = {
  host: 'localhost',
  port: '8081',
  path: '/index.html'
}

// Callback function is used to deal with response
const callback = (response) => {
  // Continously update stream with data
  let body = ''
  response.on('data', (data) => body += data )

  response.on('end', () => {
    // data received completely
    console.log(body)
  })
}

// Make request to the server
const req = htttp.request(options, callback)
req.end()