const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "html/form-get.html" );
})

// form action can be found in html/form_get.html
app.get('/process-get', function (req, res) {
  // Prepare output in JSON format for body
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

// have a look at url after submitting the form
// get parameters are visible!
// find a way to mask that!

const server = app.listen(8083, function () {
  const host = server.address().address
  const port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})