/*
The process object is a global object and can be accessed from anywhere.
There are several methods available in a process object.

The process object is an instance of EventEmitter and emits the following events
exit              - Emitted when the process is about to exit
                    There is no way to prevent the exiting of the event loop at this point,
                    and once all exit listeners have finished running, the process will exit.
beforeExit        - This event is emitted whe node empties its event loop and has nothing else to schedule.
                    Normally, the node exits when there is no work scheduled,
                    but a listener for 'beforeExit' can make asynchronous calls,
                    and cause the node to continue
uncaughtException - Emitted when an exception bubbles all the way back to the event loop.
                    If a listener is added for this exception,
                    the default action (which is to print a stack trace and exit) will not occur.
signal events     - Emitted when the processes receives a signal such as SIGINT, SIGHUP, etc.
 */

process.on('exit', (code) => {
  // following code will never execute
  setTimeout(()=> {
    console.log('This will not run')
  })
  console.log('About to exit with code: ', code)
})
console.log('Program ended')

/*
Exit Codes
Node normally exits with a 0 status code when no more async operations are pending.

Code    Name
1     - Uncaught Fatal Exception
        There was an uncaught exception,
        and it was not handled by a domain or an uncaughtException event handler.

2     - Unused
        reserved by Bash for built in misuse

3     - Internal JavaScript Parse Error
        The JavaScript source code internal in Node's bootstrapping process caused a parse error.
        This is extremely rare, and generally can only happen during the development of Node itself.

4      - Internal JavaScript Evaluation Failure
        The JavaScript source code internal in Node's bootstrapping process failed to return a function value when evaluated.
        This is extremely rare, and generally can only happen during the development of Node

5      - Fatal Error
        There was a fatal unrecoverable error in V8.
        Typically, a message will be printed to stderr with the prefix FATAL ERROR.

6     - Non-function Internal Exception Handler
        There was an uncaught exception,
        but the internal fatal exception handler function was somehow set to a non-function,
        and could not be called.

7     - Internal Exception Handler Run-Time Failure
        There was an uncaught exception,
        and the internal fatal exception handler function itself threw an error while attempting to handle it.

8     - Unused

9     - Invalid Argument
        Either an unknown option was specified,
        or an option requiring a value was provided without a value.

10    - Internal JavaScript Run-Time Failure
        The JavaScript source code internal in Node's bootstrapping process threw an error
        when the bootstrapping function was called.
        This is extremely rare,
        and generally can only happen during the development of Node itself.

11    - Invalid Debug Argument
        The --debug and/or --debug-brk options were set,
        but an invalid port number was chosen.

12    - Signal Exits
        If Node receives a fatal signal such as SIGKILL or SIGHUP,
        then its exit code will be 128 plus the value of the signal code.

        This is a standard Unix practice,
        since exit codes are defined to be 7-bit integers,
        and signal exits set the high-order bit, and then contain the value of the signal code.

Process Properties
Process provides many useful properties to get better control over system interactions.

Sr.No.  Property Name & Description

1       - stdout
        A Writable Stream to stdout.

2       - stderr
        A Writable Stream to stderr.

3       - stdin
        A Writable Stream to stdin.

4       - argv
        An array containing the command line arguments.

        The first element will be 'node',
        the second element will be the name of the JavaScript file.

        The next elements will be any additional command line arguments.

5       - execPath
        This is the absolute pathname of the executable that started the process.

6       - execArgv
        This is the set of node-specific command line options from the executable that started

7       - env
        An object containing the user environment.

8       - exitCode
        A number which will be the process exit code,
        when the process either exits gracefully,
        or is exited via process.exit() without specifying a code.

9       - version
        A compiled-in property that exposes NODE_VERSION.

10      - versions
        A property exposing the version strings of node and its dependencies.

11      - config
        An Object containing the JavaScript representation of the configure options
        that were used to compile the current node executable.

        This is the same as the "config.gypi" file that was produced when running the ./configure script.

12      - pid
        The PID (process id) of the process.

13      - title
        Getter/setter to set what is displayed in 'ps' (process status).

14      - arch
        What processor architecture you're running on: 'arm', 'ia32', or 'x64'.

15      - platform
        What platform you're running on: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'

16      - mainModule
        Alternate way to retrieve require.main.
        The difference is that if the main module changes at runtime,
        require.main might still refer to the original main module in modules that were required before the change occurred.
        Generally it's safe to assume that the two refer to the same module.

 */

// Example Process properties
// Printing to console
process.stdout.write('Hello world' + '\n')
// Reading passed parameters
process.argv.forEach((val, index, array) => {
  console.log('argv: ', index + ': ' + val)
})
// Reading set of node-specific command line options from the executable that started the process
// https://www.geeksforgeeks.org/node-js-process-execargv-property/
console.log('execArgv', process.execArgv)
// Getting processor architecture
console.log('processor architecture: ' + process.arch)
// Getting platform information
console.log('platform: ' + process.platform)
// Getting user environment
console.log('user environment: ' + process.env)
// Getting absolute pathname of executable that started the process
console.log('absolute pathname of executable that started the process: ' + process.execPath)
// Getting config
/*
An Object containing the JavaScript representation of the configure options
that were used to compile the current node executable.

This is the same as the "config.gypi" file that was produced when running the ./configure script.
 */
console.log('config: ' + process.config)
// Exposing node_version
console.log('node version: ' + process.version)
// Exposing version strings of node and its dependencies
console.log('node dependencies: ' + process.version)
// The PID (process id) of the process.
console.log('pid: ' + process.pid)
// Getter/setter to set what is displayed in 'ps' (process status).
console.log('title: ' + process.title)
// Process status
console.log('process status: ' + process.ps)
// Alternate way to retrieve require.main
console.log('main module / require.main: ' + process.mainModule)

// Example Methods
// Print the current directory
console.log('Current directory: ', process.cwd())
// Print the process version
console.log('Current version: ', process.version)
// Print the memory usage
console.log('memory usage: ', process.memoryUsage())
// Abort
// It causes the node to emit an abort.
// It causes the node to exit and generate a core file.
//console.log(process.abort())

// Changes current working directory and throws an exception if it fails
//console.log(process.chdir('oh'))

// Group Identity of the process
// only available on unix systems
//console.log('Group Identity of the process', process.getgid())

// kill
/*
Send a signal to a process.
  pid is the process id and signal is the string describing the signal to send.
  Signal names are strings like 'SIGINT' or 'SIGHUP'. If omitted, the signal will be 'SIGTERM'.
 */
/*
console.log(`Kill process ${process.pid}: `)
console.log(process.kill(process.pid))
console.log('i am not gonna be executed')
 */

// nextTick
// Once the current event loop turn runs to completion, call the callback function.
process.nextTick(()  => console.log('Current eventLoop ran to completion, i was fired in the next iteration'))

// umask
// Umask,
// or the user file-creation mode, is a Linux command
// that is used to assign the default file permission sets for newly created folders and files.
// The term mask references the grouping of the permission bits,
// each of which defines how its corresponding permission is set for newly created files.
/*
Sets or reads the process's file mode creation mask.
Child processes inherit the mask from the parent process.
Returns the old mask if mask argument is given, otherwise returns the current mask.
 */
console.log('Creation mask: ', process.umask())

// uptime
console.log('Number of seconds Node has been running: ', process.uptime())

// hrtime
/*
Returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array.
It is relative to an arbitrary time in the past.
It is not related to the time of day and therefore not subject to clock drift.

The primary use is for measuring performance between intervals.
 */
console.log('Primary Use is for measuring performance between intervals: Current high-resolution real time in a [seconds, nanoseconds] tuple Array. : ', process.hrtime())