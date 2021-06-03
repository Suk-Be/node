// Import the required modules
const express = require('express');
const multer = require('multer');
// Create Express app
const app = express();
// Configure Multer
const upload = multer({
  dest: 'upload/simple-multer'
});

// localhost:8085
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "html/form-fileupload.html" );
})

// form action can be found in html/form-fileupload.html
app.post('/upload-file', upload.single('single-val'), (req, res, next) => {
  // Display JSON data of uploaded file
  console.log(req.file);
  res.send("File upload successful");
});

// form and action can be found in index.html
app.post('/upload-multiple', upload.array('multiple-vals', 10), (req, res, next) => {
  // Display JSON data of uploaded files
  console.log(req.files);
  res.send("Files uploaded successfully");
});

app.post('/upload-photos', upload.array('my-photos', 10), (req, res, next) => {
  // Display JSON data of uploaded files
  console.log(req.files);
  res.send("Files uploaded successfully");
});

var server = app.listen(8085, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})

/*
console.logs in CLI
{
  fieldname: 'single-val',
  originalname: 'storyboard_vorlage_filmdreh.pdf',
  encoding: '7bit',
  mimetype: 'application/pdf',
  destination: 'upload/simple-multer',
  filename: '4c54aec9bdf6921c13e6049ab1b087a9',
  path: 'upload\\simple-multer\\4c54aec9bdf6921c13e6049ab1b087a9',
  size: 863290
}
[
  {
    fieldname: 'multiple-vals',
    originalname: 'ReadME.docx',
    encoding: '7bit',
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    destination: 'upload/simple-multer',
    filename: '98e2160dcdce0ac3443719729c5f9e08',
    path: 'upload\\simple-multer\\98e2160dcdce0ac3443719729c5f9e08',
    size: 42365
  }
]
[
  {
    fieldname: 'my-photos',
    originalname: '2019-09-26 11_02_15-IBM Notes Kalender - Eine Woche.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'upload/simple-multer',
    filename: '23be05ac023ff2513dfd2848ae1b442d',
    path: 'upload\\simple-multer\\23be05ac023ff2513dfd2848ae1b442d',
    size: 59476
  },
  {
    fieldname: 'my-photos',
    originalname: '2019-09-30-Externer Auftritt _ Deutsche Welle - Sprachen.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'upload/simple-multer',
    filename: '8de0ad84e62390713d9aeccf47a05188',
    path: 'upload\\simple-multer\\8de0ad84e62390713d9aeccf47a05188',
    size: 77554
  },
  {
    fieldname: 'my-photos',
    originalname: '2019-10-02-test-icons-chrome.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'upload/simple-multer',
    filename: '4b189bf1a6548138872472f4acbd1db1',
    path: 'upload\\simple-multer\\4b189bf1a6548138872472f4acbd1db1',
    size: 100262
  }
]
 */