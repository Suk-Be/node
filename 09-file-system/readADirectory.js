// Syntax: fs.readdir(path, callback)
/*
Parameters
path      − This is the directory name including path.
callback  − This is the callback function which gets two arguments (err, files)
            where files is an array of the names of the files in the directory
            excluding '.' and '..'.
 */
const fs = require('fs')

console.log('Going to read directory /tmp')
fs.readdir('/temp/', (err, files) => {
  if(err){
    return console.error(err)
  }
  files.forEach((file) => {
    console.log(file)
  })
})