/**
 * Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.
  */

'use strict'

const http = require('http');
const PORT = process.argv[2];

const PARSETIME = '/api/parsetime';
const UNIXTIME = '/api/unixtime';

const server = http.createServer((req, res) => {

   const myUrl = new URL(`http://localhost:${PORT}${req.url}`);
   let path = myUrl.pathname;
   let value = myUrl.searchParams.get('iso')
   let time = new Date(value)

   let response;

   switch (path) {
      case PARSETIME:
         response = getJsonDate(time);
         break;
      case UNIXTIME:
         response = getUnixTime(time);
         break;
   }
   if (response) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(response));
   } else {
      res.writeHead(404);
      res.end();
   }
});


function getJsonDate(time) {
   let dateObject = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
   }
   return dateObject;
}

function getUnixTime(time) {
   let dateObject = {
      unixtime: time.valueOf()
   }
   return dateObject;
}

server.listen(PORT);