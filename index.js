const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const writeFile = require('write-file');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));

const crashesPath = path.join(__dirname, 'crashes');
const exceptionsPath = path.join(__dirname, 'uncaughtexceptions');

const upload = multer({
  dest: crashesPath,
}).single('upload_file_minidump');

app.post('/vseh5Segsegeshhshsrseg/crashreports', upload, (request, response) => {
  const body = {
    ...request.body,
    filename: request.file.filename,
    date: new Date(),
  };
  const filePath = `${request.file.path}.json`;
  const report = JSON.stringify(body);

  writeFile(filePath, report, error => {
    if (error) return console.error('Error Saving', report);
    console.log('Crash Saved', filePath, report);
  });

  response.end();
});

app.post('/vseh5Segsegeshhshsrseg/uncaughtexceptions', (request, response) => {
  const filePath = path.join(exceptionsPath, `${uuid()}.json`);
  const report = JSON.stringify({ ...request.body, date: new Date() });

  writeFile(filePath, report, error => {
    if (error) return console.error('Error Saving', report);
    console.log('Exception Saved', filePath, report);
  });

  response.end();
});

app.get('/vseh5Segsegeshhshsrseg', function(req, res) {
  res.send('hello world');
});

server.listen(6011, () => {
  console.log('Crash report server running on Port 6011.');
});
