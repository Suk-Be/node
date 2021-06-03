const express = require('express')
const app = express()
const fs = require('fs')

app.get('/:id', (req, res) => {
  // First read existing users.
  fs.readFile(__dirname + '/data/users.json', 'utf8', (error, data) => {
    const users = JSON.parse(data)
    const user = users['user' + req.params.id]
    // console.log(users)
    // console.log(req.params.id)
    res.send(JSON.stringify(user))
  })
})

const server = app.listen(8091, (req, res) => {
  const host = server.address().address
  const port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})

// Now try to access defined API using URL: http://127.0.0.1:8091/2 and HTTP Method :
// GET on local machine using any REST client.
// {"name":"suresh","password":"password2","profession":"librarian","id":2}