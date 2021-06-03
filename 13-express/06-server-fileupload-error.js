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
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload an image.', 400), false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: imageFilter
});

// localhost:8086
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "html/form-fileupload-error.html" );
})

// form action can be found in html/form-fileupload-error.html
app.post('/upload-photos', upload.array('my-photos', 10), (req, res, next) => {
  // Display JSON data of uploaded files
  console.log(req.files);
  res.send("Files uploaded successfully");
});

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})

/*
[
  {
    fieldname: 'my-photos',
    originalname: '2019-09-26 11_02_15-IBM Notes Kalender - Eine Woche.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: './upload/configured-multer',
    filename: '2019-09-26 11_02_15-IBM Notes Kalender - Eine Woche.jpg-1616762846280-287160035.jpg',
    path: 'upload\\configured-multer\\2019-09-26 11_02_15-IBM Notes Kalender - Eine Woche.jpg-1616762846280-287160035.jpg',
    size: 59476
  }
]
 */