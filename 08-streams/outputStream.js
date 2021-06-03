/*
Writing to a Stream
 */
const fs = require('fs')
const data = 'Simply Easy Learning'

// Create a writeable stream
const writerStream = fs.createWriteStream('output.txt')

// Write the data to stream with encoding to be utf8
writerStream.write(data, 'utf8')

// Mark the end of the file
writerStream.end()

// Handle stream events --> finish and error
writerStream.on('finish', () => console.log('Write completed'))

writerStream.on('error', (err) => console.log(err.stack))

console.log('Program ended')