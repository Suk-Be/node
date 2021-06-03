// Syntax: Buffer.isEncoding(encoding)

/*
Returns true if the encoding is a valid encoding argument, false otherwise.
 */

const bufferIsEncoding = Buffer.isEncoding('TutorialsPoint');

console.log('valid encoding (isEncoding method)? ' + bufferIsEncoding)

// Syntax: Buffer.isBuffer(obj)

/*
Tests if obj is a Buffer.
 */

const bufferIsBuffer = Buffer.isBuffer(bufferIsEncoding);

console.log('Is obj a Buffer (isBuffer method)? ' + bufferIsBuffer)

// Syntax: Buffer.byteLength(string[, encoding])

/*
Gives the actual byte length of a string.
encoding defaults to 'utf8'.
It is not the same as String.prototype.length,
since String.prototype.length returns the number of characters in a string.

 */

const bufferByteLength = Buffer.byteLength('TutorialsPoint');

console.log('Length of the Buffer (bufferByteLength method)? ' + bufferByteLength)

// Syntax: Buffer.concat(list[, totalLength])

/*
Returns a buffer which is the result of concatenating all the buffers in the list together.

 */
const utf8E = new Buffer.from("Simply Easy Learning", "utf-8");
const asciiE = new Buffer.from("Simply Easy Learning", "ascii");
const hexE = new Buffer.from("Simply Easy Learning", "hex");
const base64E = new Buffer.from("Simply Easy Learning", "base64");

const bufferConcat = Buffer.concat([utf8E, asciiE, hexE, base64E]);

console.log('Returns a Buffer which is the result of concatenating all the buffers together ' + bufferConcat)