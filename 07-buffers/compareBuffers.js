// Syntax: buf.compare(otherBuffer);
/*
params:
  otherBuffer − This is the other buffer which will be compared with buf
 */
const buffer1 = new Buffer.from('ABC')
const buffer2 = new Buffer.from('ABCD')
const result = buffer1.compare(buffer2)

if (result < 0) {
  console.log(buffer1 + ' comes before ' + buffer2)
} else if (result === 0){
  console.log(buffer1 + ' is same as ' + buffer2)
} else {
  console.log(buffer1 + ' comes after ' + buffer2)
}