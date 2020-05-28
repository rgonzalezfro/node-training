/**
 * This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.
 */

'use strict'

const HTTP = require('http');
const URLs = process.argv.slice(2);

let responses = []
let finished = 0;

for (let index = 0; index < URLs.length; index++) {
    HTTP.get(URLs[index], (res) => {
        let result = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => { result += chunk });
        res.on('end', () => {
            finished++;
            responses[index] = result;

            if (finished > URLs.length - 1)
                responses.forEach(r => console.log(r));
        })
    });
}