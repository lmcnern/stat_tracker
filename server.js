'use strict';

var express = require('express'); //grabs from package.JSON
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  response.status(200).send('<h1>Hello Stranger!</h1>');
});

app.get('/secret', function(request, response) {
  response.send('<h1>THIS PAGE IS SECRET. GTFO.</h1>');
});

app.get('/*', function(request, response) {
  response.status(404).sendFile(__dirname +'/404.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});