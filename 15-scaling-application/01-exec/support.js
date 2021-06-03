// The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
// https://nodejs.org/docs/latest/api/process.html#process_process_argv
// process.argv[0]: /usr/local/bin/node
// process.argv[1]: /Users/../master.js
// process.argv[2]: child process
console.log("Child Process " + process.argv[2] + " executed." );

// node master.js
/*
Child process exited with exit code 0
stdout: Child Process 0 executed.
stderr:

Child process exited with exit code 0
stdout: Child Process 1 executed.
stderr:

Child process exited with exit code 0
stdout: Child Process 2 executed.
stderr:
 */
