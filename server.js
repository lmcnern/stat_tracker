'use strict';

var express = require('express'); //grabs from package.JSON
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  response.status(200).send('<h1>Hello Stranger!</h1>');
});

app.get('/public', function(request, response) {
  response.send('<h1>Hello mate!</h1>');
});

app.get('/secret', function(request, response) {
  response.send('<h1>THIS PAGE IS SECRET. GTFO.</h1>');
});

app.get('/*', function(request, response) {
  response.status(404).sendFile(__dirname +'/404.html');
});

app.listen(5000, function() {
  console.log('Server is running!');
});