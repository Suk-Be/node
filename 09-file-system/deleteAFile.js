// Syntax: fs.unlink(path, callback)
/*
Parameters
path     − This is the file name including path.
callback − This is the callback function
           No arguments other than a possible exception are given to the completion callback
 */

const fs = require('fs')

console.log('Going to delete an existing file')
fs.unlink('deleteAFile.txt', (err) => {
  if(err){
    return console.log(err)
  }
  console.log('File deleted successfully')
})