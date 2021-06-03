const fs = require('fs')
const zlib = require('zlib')

// Decompress the file input.txt.gz to input2.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input2.txt'))

console.log('File decompressed')