// Syntax: fs.open(path, flags[, mode], callback)
/*
Parameters:
- path    - This is the string having file name including path
- flags   - Flags indicate the behaviour of the file to be opened.
- mode    - It sets the file mode (permission and sticky bits), but only if the file was created. It defaults to 0666, readable and writeable.
- callback - This is the callback function which gets two arguments (err, fd)

Flag & Description:
r    - Open file for reading. An exception occurs if the file does not exist.
r+   - Open file for reading and writing. An exception occurs if the file does not exist.
rs   - Open file for reading in synchronous mode.
rs+  - Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution.

w    - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
wx   - Like 'w' but fails if the path exists.
w+   - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
wx+  - Like 'w+' but fails if path exists.

a    - Open file for appending. The file is created if it does not exist.
ax   - Like 'a' but fails if the path exists.
a+   - Open file for reading and appending. The file is created if it does not exist.
ax+  - Like 'a+' but fails if the the path exists.
 */

const fs = require('fs')

// Asynchronous - Opening file
console.log('Going to open file!')
fs.open('openFile.txt', 'r+', (err, fd) => {
  // fd is the file descriptor returned by fs.open
  if (err){
    return console.log(err)
  }
  console.log('File opened successfully!')
})