// Syntax: fs.writeFile(filename, data[, options], callback)
/*
This method will over-write the file if the file already exists.
If you want to write into an existing file then you should use another method available.

Parameters:
path      − This is the string having the file name including path.
data      − This is the String or Buffer to be written into the file.
options   − The third parameter is an object which will hold {encoding, mode, flag}.
            By default. encoding is utf8, mode is octal value 0666. and flag is 'w'
callback  − This is the callback function which gets a single parameter err
            that returns an error in case of any writing error.
 */
const fs = require('fs')

console.log('Going to write into a existing file')
fs.writeFile('writingaFile.txt', 'Simply Easy Learning SBJ!', (err, data) => {
  if(err){
    return console.log(err)
  }

  console.log('Data written successfully')
  console.log('Let us read newly written data')

  fs.readFile('writingAFile.txt', (err, data) => {
    if(err){
      return console.log(err)
    }
    console.log("Asynchronous read: " + data.toString())
  })
})