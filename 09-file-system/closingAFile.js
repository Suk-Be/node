// Syntax: fs.close(fd, callback)
/*
Parameters:
fd        − This is the file descriptor returned by file fs.open() method.
callback  − This is the callback function
            No arguments other than a possible exception are given to the completion callback.
 */

const fs = require('fs')
const buf = new Buffer.alloc(1024)

console.log('Going to open an existing file')
fs.open('readingAFile.txt', 'r+', (err, fd) => {
  if(err){
    return console.log(err)
  }
  console.log('File opened successfully')
  console.log('Going to read file')

  fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
    if(err){
      console.log(err)
    }
    // Print only read bytes to avoid junk
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString())
    }
    // Close the opened file
    fs.close(fd, (err) => {
      if (err){
        console.log(err)
      }
      console.log('File closed successfully')
    })
  })
})