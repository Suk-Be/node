// Syntax: buf.write(string[, offset][, length][, encoding])
/*
params:
string − This is the string data to be written to buffer.
offset − This is the index of the buffer to start writing at. Default value is 0.
length − This is the number of bytes to write. Defaults to buffer.length.
encoding − Encoding to use. 'utf8' is the default encoding.
 */

buf = new Buffer.alloc(256)
len = buf.write('Simply easy learning')

console.log('Octets written: ' + len)
// Octets written: 20