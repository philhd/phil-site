const static = require('node-static');
const server = new static.Server('./public');
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    server.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);