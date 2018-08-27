const express = require('express');
const bodyParser = require('body-parser');
//const path = require('path');
//const fs = require('fs');
//const multer = require('multer');
//const upload = multer({dest: './upload'});
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('SellingMachine api');
});

/*app.post('/u', upload.single('myFile'), function(req, res) {
  console.log("File arrived!");
  let rex = execSync(`mv ${path.join(__dirname, req.file.path)} ${path.join(__dirname, req.file.destination, req.file.originalname)}`).toString();
  console.log(req.file, '\n\n', rex);
  res.status(200).end();
});*/

module.exports = app;
