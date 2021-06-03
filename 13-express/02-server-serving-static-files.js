const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello GET')
})

/*
Serving Static Files
Express provides a built-in middleware express.static to serve static files,
such as images, CSS, JavaScript, etc.

You simply need to pass the name of the directory where you keep your static assets,
to the express.static middleware to start serving the files directly.
For example, if you keep your images, CSS, and JavaScript files in a directory named public,
you can do this
 */

app.use(express.static('public'))

const server_basic_routing = app.listen(8082, () => {
  const host = server_basic_routing.address().address
  const port = server_basic_routing.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

/*
 app.use(express.static('public'))
 ------
 /someBadPractice.txt
 /images/logo.png
 /example/some.txt

 http://127.0.0.1:8082/someBadPractice.txt
 http://127.0.0.1:8082/images/logo.png
 http://127.0.0.1:8082/example/some.txt

 */
