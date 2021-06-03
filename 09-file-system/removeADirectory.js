// Syntax: fs.rmdir(path, callback)
/*
Parameters:
path      - This is the directory name including path
callback  - This is the callback function
          No arguments other than a possible exception are given to the completion callback
*/

const fs = require('fs')

console.log('Going to delete directory /temp/test')
fs.rmdir('/temp/test', (err) => {
  if (err){
    return console.error(err)
  }
  console.log('Going to read directory /temp')
  fs.readdir('/temp/', (err, files) => {
    if (err){
      return console.error(err)
    }
    files.forEach((file) => {
      console.log(file)
    })
  })
})