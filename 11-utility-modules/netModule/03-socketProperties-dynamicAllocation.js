// genius gist
// https://gist.github.com/sid24rane/2b10b8f4b2f814bd0851d861d3515a10

const net = require('net')

// creates the server
const server = net.createServer()

//emitted when server closes ...not emitted until all connections closes.
server.on('close', () => {
  console.log('Server closed')
})

// emitted when new client connects
server.on('connection', (socket) => {

  //this property shows the number of characters currently buffered to be written. (Number of characters is approximately equal to the number of bytes to be written, but the buffer may contain strings, and the strings are lazily encoded, so the exact number of bytes is not known.)
  //Users who experience large or growing bufferSize should attempt to "throttle" the data flows in their program with pause() and resume().

  console.log('Buffer size: ' + socket.bufferSize + '\n')

  console.log('---------server details -----------------' + '\n')

  const address = server.address()
  const port = address.port
  const family = address.family
  const ipaddr = address.address
  console.log('Server is listening at port' + port)
  console.log('Server ip: ' + ipaddr)
  console.log('Server is IP4/IP6: ' + family + '\n')

  const lport = socket.localPort
  const laddr = socket.localAddress
  console.log('Server is running at LOCAL port' + lport)
  console.log('Server LOCAL ip: ' + laddr + '\n')

  console.log('---------remote client info -----------------' + '\n')

  const rport = socket.remotePort
  const raddr = socket.remoteAddress
  const rfamily = socket.remoteFamily
  console.log('REMOTE socket is listening at port: ' + rport)
  console.log('REMOTE socket ip: ' + raddr)
  console.log('REMOTE socket is IP4/IP6: ' + rfamily + '\n')

  console.log('--------------------------------------------' + '\n')

  //const no_of_connections =  server.getConnections(); // sychronous version

  server.getConnections((error,count) => {
    console.log('Number of concurrent connections to the server : ' + count + '\n');
  });

  socket.setEncoding('utf8');

  socket.setTimeout(800000,function(){
    // called after timeout -> same as socket.on('timeout')
    // it just tells that socket timed out => its ur job to end or destroy the socket.
    // socket.end() vs socket.destroy() => end allows us to send final data and allows some i/o activity to finish before destroying the socket
    // whereas destroy kills the socket immediately irrespective of whether any i/o operation is goin on or not...force destroy takes place
    console.log('Socket timed out');
  });

  socket.on('data',(data) => {
    const bread = socket.bytesRead;
    const bwrite = socket.bytesWritten;
    console.log('Bytes read : ' + bread);
    console.log('Bytes written : ' + bwrite);
    console.log('Data sent to server : ' + data);

    //echo data
    const is_kernel_buffer_full = socket.write('Data ::' + data);
    if (is_kernel_buffer_full) {
      console.log('Data was flushed successfully from kernel buffer i.e written successfully!');
    } else {
      socket.pause();
    }
  })

  socket.on('drain', () => {
    console.log('write buffer is empty now ... u can resume the writeabel stream')
    socket.resume()
  })

  socket.on('error', (error) => {
    console.log('Error: ' + error)
  })

  socket.on('timeout', () => {
    console.log('Socket timed out')
    socket.end()
    // can call socket.destroy() here too
  })

  socket.on('end', (data) => {
    console.log('Socket ended from other end')
    console.log('End data: ' + data)
  })

  socket.on('close', (error) => {
    const bread = socket.bytesRead
    const bwrite = socket.bytesWritten
    console.log('Bytes read: ' + bread)
    console.log('Bytes written: ' + bwrite)
    console.log('socket closed')
    if (error){
      console.log('Socket was closed coz of transmission error')
    }
  })

  setTimeout(() => {
    const isdestroyed = socket.destroyed
    console.log('Socket destroyed:' + isdestroyed)
    socket.destroy()
  }, 1200000)

})

// emits when an error occurs -> calls closed event immediately after this
server.on('error', (error) => {
  console.log('Error: ' + error)
})

// emits when server is bound with server.listen
server.on('listening', () => {
  console.log('Server is listening')
})

server.maxConnections = 10


// FYI: either use static port allocation or dynamic port allocation
// using both listen methods result in error

// static port allocation
/* server.listen(2222) */

// dynamic port allocation
server.listen(() => {
  const address = server.address()
  const port = address.port
  const family = address.family
  const ipaddr = address.address
  console.log('Server is listening at port' + port)
  console.log('Server ip: ' + ipaddr)
  console.log('Server is IP4/IP6: ' + family)
})

const isListening = server.listening

if(isListening){
  console.log('Server is listening' + '\n')
} else {
  console.log('Server is not listening' + '\n')
}

setTimeout(() => {
  server.close()
}, 5000000)

//---------------------client----------------------

// creating a custom socket client and connecting it ...
const client = new net.Socket()
client.connect({
  port: server.address().port
})

client.on('connect', () => {
  console.log('Client: connection established with server', '\n')

  console.log('---------client details -----------------', '\n')
  const address = client.address()
  const port = address.port
  const family = address.family
  const ipaddr = address.address
  console.log('Client is listen at port' + port)
  console.log('Client ip: ' + ipaddr)
  console.log('Client is IP4/IP6: ' + family + '\n')

  // writing data to server
  client.write('hello from client', 'utf8', '\n')
})

client.setEncoding('utf8')

client.on('data', (data) => {
  console.log('Data from server: ' + data)
})


//NOTE:--> all the events of the socket are applicable here..in client...

// -----------------creating client using net.connect instead of custom socket-------

// server creation using net.connect --->
// u can also => write the below code in separate js file
// open new node instance => and run it ...

/*
const clients = net.connect({port: 2222}, () => {
  // 'connect' listener
  console.log('connected to server')
  clients.write('world!', '\n')
})
clients.on('data', (data) => {
  console.log(data.toString())
  clients.end()
})
clients.on('end', () => {
  console.log('disconnected from server')
})

 */