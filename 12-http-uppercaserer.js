/**
 * Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.
 */

'use strict'

const http = require('http');

const PORT = process.argv[2];
const server = http.createServer(listener);

function listener(req, res) {
    if (req.method === 'POST') {
        let result = '';

        req.on('data', (chunk) => { result += chunk.toString().toUpperCase() });

        req.on('end', () => {
            res.end(result)
        })

        req.on('error', (err) => {
            res.end(err);
        });
    }
}

server.listen(PORT);