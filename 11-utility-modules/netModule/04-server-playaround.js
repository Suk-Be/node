const net = require('net')
const port = 2222

// creates server
const server = net.createServer()

server.listen(port, () => {
  console.log('Server is listening on ', port)
})

// Emitted when the server has been bound after calling server.listen.
server.on('listening', () => {
  console.log('Server is listening on event listening' + '\n')

  console.log('---------server details -----------------' + '\n')
  const address = server.address()
  const port = address.port
  const family = address.family
  const ipaddr = address.address
  console.log('Socket bound address: ', address)
  console.log('Server port: ', port)
  console.log('Server ip: ', ipaddr)
  console.log('Server is IP4/IP6: ', family)
})

// emitted when new client connects
server.on('connect', (socket) => {
  console.log('Server is connected to client')

  // this property shows the number of characters currently buffered to be written.
  // (Number of characters is approximately equal to the number of bytes to be written,
  // but the buffer may contain strings,
  // and the strings are lazily encoded, so the exact number of bytes is not known.)

  //Users who experience large or growing bufferSize should attempt to "throttle" the data flows in their program with pause() and resume().

  console.log('Buffer size: ' + socket.bufferSize)

  console.log('---------remote client info -----------------' + '\n')

})

//emitted when server closes ...not emitted until all connections closes.
server.on('close', () => {
  console.log('Server closed')
})