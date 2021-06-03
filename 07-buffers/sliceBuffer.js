// Syntax: buf.slice([start][end]);
/*
params:
  start − Number, Optional, Default: 0
  end - Number, optional, Default: buffer.length
 */

/*
Returns a new buffer which references the same memory as the old one,
but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes.
Negative indexes start from the end of the buffer.
 */

const buffer1 = new Buffer.from('TutorialsPoint');

// slicing a buffer
const buffer2 = buffer1.slice(0,9)

console.log('buffer2 content: ' + buffer2.toString())