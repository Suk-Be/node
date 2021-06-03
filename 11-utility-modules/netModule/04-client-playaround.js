const net = require('net')
const port = 2222

// This file needs 04-server-playaround.js running to communicate via sockets

// creates server
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