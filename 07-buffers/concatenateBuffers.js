// Syntax: Buffer.concat(list[, totalLength])
/*
params:
  list − Array List of Buffer objects to be concatenated.
  totalLength − This is the total length of the buffers when concatenated.
 */
const buffer1 = new Buffer.from('TutorialsPoint')
const buffer2 = new Buffer.from('Simply easy learning')
const buffer3 = new Buffer.concat([buffer1, buffer2])

console.log('buffer3 content: ' + buffer3.toString())
