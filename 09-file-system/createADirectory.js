// Syntax: fs.mkdir(path[, mode], callback)
/*
Parameters
path      − This is the directory name including path.
mode      − This is the directory permission to be set. Defaults to 0777.
callback  − This is the callback function
          No arguments other than a possible exception are given to the completion callback
 */
const fs = require('fs')
console.log("Going to create directory /tmp/test");
fs.mkdir('/temp/test',function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully!");
  // created C:\temp\test
});