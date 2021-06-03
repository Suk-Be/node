/*
Chaining is a mechanism
to connect the output of one stream to another stream and create a chain of multiple stream operations.

It is normally used with piping operations.
 */

const fs = require('fs')
const zlib = require('zlib')

// Compress the file input.txt to input.txt.tgz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'))

console.log('File Compressed')