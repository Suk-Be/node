// import events module
const events = require('events')
// create an eventEmitter object
const eventEmitter = new events.EventEmitter()
// create an eventhandler
const connectHandler = () => {
  console.log('connection successful')
  // fire the data_received event
  eventEmitter.emit('data_received')
}

// bind the connection event with the handler
eventEmitter.on('connection', connectHandler)
// bind the data_received event with the anonymous function
eventEmitter.on('data_received', () => {
  console.log('data received successfully')
})

// fire the connection event
eventEmitter.emit('connection')

console.log('program ended')
