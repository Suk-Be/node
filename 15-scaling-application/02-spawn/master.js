/*
// The spawn() Method
child_process.spawn launches a new process with a given command.

child_process.spawn(command[, args][, options])

// Parameters
Here is the description of the parameters used

- command (Sting) The command to run
- args (Array) List of string arguments
- options (Object) may comprise one or more of the following options
  - cwd (String) Current working directory of the child process
  - env (Object) Environment key-value pairs
  - stdio (Array) String Child's stdio configuration
  - customFds (Array) Deprecated File descriptors for the child to use to use for stdio.
  - detached (Boolean) The child will be a process group leader
  - uid (Number) Sets the user identity of the process
  - gid (Number) Sets the group identity of the process

 The spawn() method returns streams (stdout & stderr)
 and it should be used when the process returns a volume amount of data.
 spawn() starts receiving the response as soon as the response starts executing.
 */

const fs = require('fs')
const child_process = require('child_process')

for(let i = 0; i < 3; i++) {
  var workerProcess = child_process.spawn('node', ['support.js', i])

  workerProcess.stdout.on('data', (data) => {
    console.log('stdout: ' + data)
  })

  workerProcess.stderr.on('data', (data) => {
    console.log('stderr: ' + data)
  })

  workerProcess.on('close', (code) => {
    console.log('child process exited with code ' + code)
  })
}