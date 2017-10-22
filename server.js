var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

const serverPath = 'http://cfassignment.herokuapp.com/matthewnicolaou/tasks'

app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/client/dist/bundle.js'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/client/dist/index.html'));
});

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port', process.env.PORT || 3000, '...');
});