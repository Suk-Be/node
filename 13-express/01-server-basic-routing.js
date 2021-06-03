const express = require('express')
const app = express()

/*
Basic Routing
Routing refers to determining how an application responds to a client request to a particular endpoint,
which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
 */

// app.get() This responds with "Hello world" on the homepage
app.get('/', (req, res) => {
  console.log('Got a request for the homepage')
  res.send('Hello GET')
})

// app.post() This responds a POST request for the homepage
// form action post is not implemented, to test it in this file. Just be aware that express supports that routing behaviour
app.post('/', (req, res) => {
  console.log('Got a post request for the homepage')
  res.send('Hello POST')
})

// This responds a DELETE request for the /del_user page.
// form action delete is not implemented, to test it in this file. Just be aware that express supports that routing behaviour
app.delete('/del_user', function (req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', (req, res) => {
  console.log('Got a GET request for /list_user');
  res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123456cd, and so on
// there is a wild card option for get requests
app.get('/ab*cd', (req, res) => {
  console.log('Got a GET request for /ab*cd')
  res.send('Page Pattern Match')
})

const server_basic_routing = app.listen(8081, () => {
  const host = server_basic_routing.address().address
  const port = server_basic_routing.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

// see logging for get routing in browser
// http://127.0.0.1:8081/,
// http://127.0.0.1:8081/list_user,
// http://127.0.0.1:8081/ab123456cd
