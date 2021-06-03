var express = require('express');
var app = express();
var fs = require("fs");

const id = 2;

app.delete('/delete-user', (req, res) => {
  // First read existing users.

  fs.readFile(__dirname + '/data/users.json', 'utf8', (error, data) => {
    data = JSON.parse( data );
    // delete user with id 2
    delete data['user' + id];
    // display data in POSTMAN
    res.end( JSON.stringify(data));
    // display data in CLI
    console.log( data );
  })
})

const server = app.listen(8092, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})

// Now try the http delete method with post or other REST client
// :delete: http://127.0.0.1:8092/delete-user

// body in post man
// {"user1":{"name":"mahesh","password":"password1","profession":"teacher","id":1},"user3":{"name":"ramesh","password":"password3","profession":"clerk","id":3}}

// console.log in CLI
/*
{
  user1: {
    name: 'mahesh',
    password: 'password1',
    profession: 'teacher',
    id: 1
  },
  user3: { name: 'ramesh', password: 'password3', profession: 'clerk', id: 3 }
}
 */