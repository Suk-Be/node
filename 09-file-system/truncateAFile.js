// Syntax: fs.ftruncate(fd, len, callback)
/*
Parameters
fd        − This is the file descriptor returned by fs.open().
len       − This is the length of the file after which the file will be truncated.
callback  − This is the callback function
            No arguments other than a possible exception are given to the completion callback.
 */
const fs = require('fs')
const buf = new Buffer.alloc(1024)

console.log('Going to open an existing file')
fs.open('truncateAFile.txt', 'r+', (err, fd) => {
  if(err){
    return console.log(err)
  }
  console.log('File opened successfully')
  console.log('Going to truncate the file after 10 bytes')

  // Truncate the opened file with 10 bytes
  fs.ftruncate(fd, 10, (err) => {
    if (err){
      console.log(err)
    }
    console.log('File truncated successfully')
    console.log('Going to read the same file')

    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
      if(err){
        console.log(err)
      }
      // Print only read bytes to avoid junk
      if(bytes > 0){
        console.log(buf.slice(0, bytes).toString())
      }
      // Close the opened file
      fs.close(fd, (err) => {
        if(err){
          console.log(err)
        }
        console.log('File closed successfully')
      })
    })
  })
})