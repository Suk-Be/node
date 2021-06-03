/* Piping the Streams  */
/*
Piping is a mechanism where we provide the output of one stream as the input to another stream.
It is normally used to get data from one stream and to pass the output of that stream to another stream.

There is no limit on piping operations.
 */
const fs = require('fs')

// Create a readable stream
const readerStream = fs.createReadStream('input.txt')

// Create a writeable stream
const writerStream = fs.createWriteStream('outputPipe.txt')

// Pipe the read and write operations
// read input.txt and write to data to outputPipe.txt
readerStream.pipe(writerStream)

console.log('Program ended')