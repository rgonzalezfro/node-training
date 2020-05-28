/**
 * Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.
 */

'use strict'

const http = require('http');
const fs = require('fs');

const PORT = process.argv[2];
const FILENAME = process.argv[3];

const server = http.createServer(listener);

server.listen(PORT);

function listener(req, res) {
  var readStream = fs.createReadStream(FILENAME);

  readStream.on('open', function () {
    readStream.pipe(res);
  });

  readStream.on('error', function(err) {
    res.end(err);
  });
}