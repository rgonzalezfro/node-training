/**
 * Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).
 */

'use strict'

const HTTP = require('http');
const URL = process.argv[2];

HTTP.get(URL, logResponse);

function logResponse(res) {
    res.setEncoding('utf8');
    res.on('data', (chunk) => { console.log(chunk)});
}