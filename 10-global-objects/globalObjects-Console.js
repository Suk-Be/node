/*
console object
Node.js console is a global object
and is used to print different levels of messages to stdout and stderr.
There are built-in methods to be used for printing informational, warning, and error messages.

It is used in synchronous way when the destination is a file or a terminal
and in asynchronous way when the destination is a pipe.

console Methods:
.log([data][, ...])         - Prints to stdout with newline.
                              This function can take multiple arguments in a printf()-like way
.info([data][, ...])        - Prints to stdout with newline.
                              This function can take multiple arguments in a printf()-like way
.error([data][, ...])       - Prints to stderr with new line.
                              This function can take multiple arguments in a printf()-like way
.warn([data][, ...])        - Prints to stderr with new line.
                              This function can take multiple arguments in a printf()-like way
.dir(obj[, ...])            - Uses util.inspect on obj
                              and prints resulting string to stdout
.time(label)                - Mark a time
.timeEnd(label)             - Finish timer, record output
.trace(message[,...])       - Print to stderr 'Trace :',
                              followed by the formatted message
                              and stack trace to the current position
.assert(value[,message][,...]) - Similar to assert.ok(),
                              but the error message is formatted as util.format(message...)

                              FYI Node.js assert.ok() method:
                              The assert.ok() method tests if a given expression is true or not.

                              If the expression evaluates to 0, or false,
                              an assertion failure is being caused, and the program is terminated.
 */
console.info('Program started')

const counter = 10
console.log('Counter: %d', counter)

console.time('Getting data')

// Do some processing here...

console.timeEnd('Getting data')

console.info('Program ended')

