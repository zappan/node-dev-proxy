/*jshint node:true*/
var http = require('http');


function proxy(req, res, hostname, host, port, path, method, headers) {
  var options
    , request;

  // avoid setting hostname if host (IP) available
  // because of a slow DNS lookup in Node core
  options = {
      hostname: !host ? hostname : undefined
    , host: host
    , port: port
    , method: method
    , path: path
    , headers: headers || {}
  };

  request = http.request(options, function(response) {
    res.writeHead(response.statusCode, response.headers);
    response.on('data', function (chunk) {
      res.write(chunk);
    });
    response.on('end', function() {
      res.end();
    });
  });

  req.on('data', function (chunk) {
    request.write(chunk);
  });
  req.on('end', function() {
    request.end();
  });
}

module.exports = {
  proxy: proxy
};
