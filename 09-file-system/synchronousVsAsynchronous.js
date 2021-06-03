// Generally: Node implements File I/O using simple wrappers around standard POSIX functions.
// The Node File System (fs) module can be imported using the following syntax −

const fs = require('fs')

// Asynchronous read
fs.readFile('synchronousVsAsynchronous.txt', (err, jupp) => {
  if(err){
    return console.log(err)
  }
  console.log('Asynchronous read: ', jupp.toString())
})

// Synchronous read
const data = fs.readFileSync('synchronousVsAsynchronous.txt')
console.log('Synchronous read: ' + data.toString())

console.log('Program ended')