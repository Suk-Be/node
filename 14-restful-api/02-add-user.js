const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs')

// Create application/x-www-form-urlencoded parser (internal querystring library)
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.sendFile( __dirname + "/" + "html/form-post.html" );
})

app.post('/add-user', urlencodedParser, (req, res) => {

  // Object literal from req data
  const username = { 0: req.body.user }
  const user = {}
  user[username[0]] = {
    name: req.body.name,
    password: req.body.password,
    profession: req.body.profession,
    id: parseInt(req.body.id)
  }

  console.log('res: ', user)


  fs.readFile(__dirname + '/data/users.json', 'utf8', (err, data) => {
    data = JSON.parse(data)
    // inserting 1 new user into existing json structure
    data['user4'] = user['user4']
    console.log(data)
    // display data (res in browser)
    res.end(JSON.stringify(data))
  })

})

const server = app.listen(8090, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})