// Syntax: buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd]);
/*
params:
  targetBuffer − Buffer object where buffer will be copied
  targetStart - Number, Optional, Default: 0
  sourceStart - Number, optional, Default: 0
  sourceEnd - Number, optional, Default: buffer.length
 */

/*
Return Value
No return value.
Copies data from a region of this buffer to a region in the target buffer
even if the target memory region overlaps with the source.

If undefined,
the targetStart and sourceStart parameters default to 0,
while sourceEnd defaults to buffer.length.
 */

const buffer1 = new Buffer.from('ABC')

// copy a buffer
const buffer2 = new Buffer.alloc(3)
buffer1.copy(buffer2)

console.log('buffer2 content: ' + buffer2.toString())
