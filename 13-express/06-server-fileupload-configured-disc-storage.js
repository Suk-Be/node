// Import the required modules
const express = require('express');
const multer = require('multer');
// Create Express app
const app = express();
// Configure Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/configured-multer')
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop()
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + '-' + uniqueSuffix + '.' + ext)
  }
})
const upload = multer({ storage: storage });

// localhost:8086
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "html/form-fileupload-configured-multer.html" );
})

// form action can be found in html/form-fileupload-configured-multer.html
app.post('/upload-file', upload.single('any-single-file'), (req, res, next) => {
  // Display JSON data of uploaded file
  console.log(req.file);
  res.send("File upload successful");
});

app.post('/upload-multiple', upload.array('multiple-word-files', 10), (req, res, next) => {
  // Display JSON data of uploaded files
  console.log(req.files);
  res.send("Files uploaded successfully");
});

app.post('/upload-photos', upload.array('multiple-photos', 10), (req, res, next) => {
  // Display JSON data of uploaded files
  console.log(req.files);
  res.send("Files uploaded successfully");
});

var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})

/*
[
  {
    fieldname: 'multiple-word-files',
    originalname: 'ReadME.docx',
    encoding: '7bit',
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    destination: './upload/configured-multer',
    filename: 'ReadME.docx-1616761466440-622800238.docx',
    path: 'upload\\configured-multer\\ReadME.docx-1616761466440-622800238.docx',
    size: 42365
  }
]
{
  fieldname: 'any-single-file',
  originalname: '10.06.2020-external.css',
  encoding: '7bit',
  mimetype: 'text/css',
  destination: './upload/configured-multer',
  filename: '10.06.2020-external.css-1616761667219-377958639.css',
  path: 'upload\\configured-multer\\10.06.2020-external.css-1616761667219-377958639.css',
  size: 38200
}


 */