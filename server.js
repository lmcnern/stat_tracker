var http = require('http');
var fs = require('fs');

//404 Response
function response404(response) {
  response.writeHead(404, {'Content-type': 'text/plain'});
  response.write('Sorry! Your page could not be found!!!');
  response.end();
}

//Handle User Request
function onRequest(request, response) {
  if (request.method == 'GET' && request.url == '/') {
    response.writeHead(200, {'Content-type': 'text/html'});
    fs.createReadStream('./index.html').pipe(response);
  } else {
    response404(response);
  }
}

http.createServer(onRequest).listen(8888);
console.log('Server is now running!!!');