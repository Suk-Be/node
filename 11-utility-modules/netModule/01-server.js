const net = require('net')

const server = net.createServer((connection) => {
  console.log('client connected')

  connection.on('end', () => {
    console.log('client disconnected')
  })

  connection.write('Hello world!\r\n')
  connection.pipe(connection)
})

server.listen(8080, () => {
  console.log('server is listening')
})

/*
// Asynchronously get the number of concurrent connections on the server.
// Works when sockets were sent to forks. Callback should take two arguments err and count.
server.getConnections((error, count) => {
  if (error){
    console.log(error)
  }
  server.listen(8080, () => {
    console.log('server is listening')
  })
  console.log(count)
})
 */

/*
// Calling unref() on a server will allow the program to exit if this is the only active server in the event system.
// If the server is already unrefed calling unref() again will have no effect.
server.unref()

// Opposite of unref(), calling ref() on a previously unrefed server will not let the program exit if it's the only server left (the default behavior).
// If the server is refed calling ref() again will have no effect.
server.ref()
 */
/*
server.close(() => {
  console.log('server closed')
  console.log('server reopens')
  // it is so simple to close and open a connection a socket
  server.listen(() => {
    console.log('opened server on', server.address());
  });
})
 */


