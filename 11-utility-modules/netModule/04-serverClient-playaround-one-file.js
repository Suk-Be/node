const net = require('net')
// static port allocation
const port = 4444

// runs server and client in one file (04-server-playaround.js, 05-client-playaround.js)

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
server.on('connect', () => {
  console.log('Server is connected to client')
})
//emitted when server closes ...not emitted until all connections closes.
server.on('close', () => {
  console.log('Server closed')
})

// -------------------------------------------------------------------------------//

// creates client
const client = net.connect({ port: port }, () => {
  console.log('connected to server on port: ', port)
})

// Emitted when a socket connection is successfully established.
client.on('connect', () => {
  console.log('Client established connenction with server', '\n')

  console.log('---------remote client info -----------------' + '\n')

  const rport = client.remotePort
  const raddr = client.remoteAddress
  const rfamily = client.remoteFamily

  console.log('REMOTE socket is listening at port: ' + rport)
  console.log('REMOTE socket ip: ' + raddr)
  console.log('REMOTE socket is IP4/IP6: ' + rfamily)
})