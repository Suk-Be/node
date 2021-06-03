# Node Basic Concepts and Programming Patterns

This is an repository with basic programming examples for typical node use cases.

- 01-first application **running code from the console**
- 04-callback-concepts **blocking, non-blocking**
- 05-event-loop-concepts **emit, bind**
	- Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
	- https://nodejs.org/api/events.html#events_events
- 06-event-emitters **EventEmitter class: methods like addListener or listener count**
	- https://nodejs.org/api/events.html#events_events_on_emitter_eventname_options
- 07-buffers **are objects and are used to represent a fixed-length sequence of bytes. utf-8 is default setting (suitable for text) other decodings are possible and use cases depend on need**
	- https://nodejs.org/api/buffer.html
- 08-streams **are an abstract interface for working with streaming data in Node.js: reading, writing, duplex, transforming. instances**
	- https://nodejs.org/api/stream.html
- 09-file-system **open, close, read, write, delete, create, truncate, directory, synchronous, asynchronous**
	- The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
	- https://nodejs.org/api/fs.html#fs_file_system
- 10-global-objects **are available in all modules e.g. process, console**
	- These objects are available in all modules
	- https://nodejs.org/api/globals.html
- 11-utility-modules **e.g. net, path, os, dns, domain**
	- https://nodejs.org/api/net.html
	- https://nodejs.org/api/path.html
	- https://nodejs.org/api/os.html
	- https://nodejs.org/api/dns.html
	- https://nodejs.org/api/domain.html
- 12-web-module **http, url**
	- https://nodejs.org/api/url.html
	- https://nodejs.org/api/http.html
- 13-express **routing, get, post, serving static files, file upload, file storage configuration, file upload errors, get cookies**
	- https://expressjs.com/de/, https://koajs.com/#introduction (seems to be the better alternative)
	- https://github.com/expressjs/multer
- 14-restful-api **listing, adding, deleting users from a json file**
	- https://de.wikipedia.org/wiki/Representational_State_Transfer
- 15-scaling-application **child process: exec, fork, spawn**
	- https://nodejs.org/api/child_process.html#child_process_child_process
	- https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
	- https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options
	- https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options

## Further stuff to research
https://yonigoldberg.medium.com/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347

	https://www.serverless.com/
	https://principlesofchaos.org/
	https://docs.pact.io/

https://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/