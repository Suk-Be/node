const express = require('express')
const app = express()
const fs = require('fs')

app.get('/list-users', (req, res) => {
  fs.readFile(__dirname + '/data/users.json', 'utf8', (err, data) => {
    console.log(data)
    res.end(data)
  })
})

const server = app.listen(8089, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})