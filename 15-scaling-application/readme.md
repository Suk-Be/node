# Scaling application

Node runs in a single thread mode,
but it uses an event-driven paradigm to handle concurrency.

It also facilitates creation of **child processes** to leverage parallel processes
on multi-core cpu based systems.

Child processes always have three streams
child.stdin,
child.stdout,
child.stderr
which may be shared with the stdio streams of the following parent process.

Node provides child_process module which has the following three major ways to create a child process.
- exec
  
  child_process.exec method runs a command in a shell/console and buffers the output.

- spawn
  
  child_process.spawn launches a new process with a given command.

- fork
  
  The child_process.fork method is a special case of the spawn() to create child processes.