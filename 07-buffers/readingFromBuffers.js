buf = new Buffer.alloc(26)
for (let i = 0; i < 26; i++){
  buf[i] = i + 97
}

// Syntax: buf.toString([encoding][, start][, end])
/*
params:
  encoding − Encoding to use. 'utf8' is the default encoding
  start − Beginning index to start reading, defaults to 0
  end − End index to end reading, defaults is complete buffer
 */

// ascii encoding
console.log(buf.toString('ascii'))
// ascii encoding, start 0 index, stop index 5
console.log(buf.toString('ascii', 0, 5))
// utf-8 encoding, start 1 index, stop index 7
console.log(buf.toString('utf-8', 1, 7))
// defaults to utf-8 encoding, start 0 index, stop index 5
console.log(buf.toString(undefined, 0, 5))