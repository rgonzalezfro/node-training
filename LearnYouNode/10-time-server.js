/**
 * Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.
 */

'use strict'

const net = require('net')

const PORT = process.argv[2];
const server = net.createServer(listener);

server.listen(PORT);

function listener(socket) {
    const date = new Date();
    const year = date.getFullYear();
    const month = twoDigits(date.getMonth()+1)
    const day = twoDigits(date.getDate())
    const hours = twoDigits(date.getHours())
    const minutes = twoDigits(date.getMinutes())
    
    socket.end(`${year}-${month}-${day} ${hours}:${minutes}\n`);
}

function twoDigits (i) {
    return (i < 10 ? '0' : '') + i
  }