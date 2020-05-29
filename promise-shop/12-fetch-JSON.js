/**
 * Fetch JSON from [http://](http://) and console.log it.

    There are several things you will want to know:

    * `q-io`'s `http` module has a `read` method which returns a promise for thecontent of a successful (status 200) HTTP request.
    * Parse the returned JSON and `console.log` it for much win.

    This challenge is a bit tricky but the implementation is relatively
    straightforward.  If you get stuck, refer to the q-io documentation for
    clarification:

    [https://](https://)
*/

'use strict'

const http = require('q-io/http');

http.read('http://localhost:1337')
    .then(response => JSON.parse(response))
    .then(console.log);
