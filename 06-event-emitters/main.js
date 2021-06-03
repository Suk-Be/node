const events = require('events')
const eventEmitter = new events.EventEmitter();

// listener #1
const listener1 = () => {
  console.log('listener1 executed')
}
// listener #2
const listener2 = () => {
  console.log('listener2 executed')
}

// bind the connection event with listener1 function
eventEmitter.addListener('connection', listener1)
// bind the connection event with listener2 function
eventEmitter.on('connection', listener2)

// count eventlisteners
console.log(
  eventEmitter.listenerCount('connection')
  +
  ' Listener(s) listening to connection event'
)

// fire the connection event
eventEmitter.emit('connection')

// remove the binding of listener 1
eventEmitter.removeListener('connection', listener1)
console.log('Listener1 will not listen')

// fire the connection event (only one listener instead of two after removing one)
eventEmitter.emit('connection')
console.log(
  eventEmitter.listenerCount('connection')
  +
  ' Listener(s) listening to connection event'
)

console.log('Program ended')