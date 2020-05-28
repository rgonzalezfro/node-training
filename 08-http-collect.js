/**
 * Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
 */

'use strict'

const HTTP = require('http');
const URL = process.argv[2];

HTTP.get(URL, logResponse);

function logResponse(res) {
    let result = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => { result += chunk });
    res.on('end', () => {
        console.log(result.length)
        console.log(result)
    })
}