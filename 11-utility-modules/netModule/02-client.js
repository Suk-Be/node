const net = require('net')

// Class - net.Socket
// This object is an abstraction of a TCP or local socket.
// net.Socket instances implement a duplex Stream interface.
// They can be created by the user
// and used as a client (with connect())
// or they can be created by Node
// and passed to the user through the 'connection' event of a server.

// net.Socket is an event emitter

// this example is an example of server and client socket duplex stream
// communicating asynchronously

// to make the example work server.js must be running first

// connect event - Emitted when a socket connection is successfully established.
const client = net.connect({ port: 8080 }, () => {
  console.log('connected to server!')
})

// data event - Emitted when data is received.
// The argument data will be a Buffer or String. Encoding of data is set by socket.setEncoding().
client.on('data', (data) => {
  console.log(data.toString())
  client.end()
})

// end event - Emitted when the other end of the socket sends a FIN packet.
client.on('end', () => {
  console.log('disconnected from server!')
})