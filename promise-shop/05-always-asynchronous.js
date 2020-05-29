/**
 * In this lesson, we are going to prove to ourselves that promises are always
    asynchronous.

    First, create a promise using the Promise constructor.

    In the promise’s executor, immediately fulfill the promise with a value of
    'PROMISE VALUE'.

    After the creation of the promise, pass console.log as the success handler to
    the promise.

    Finally, print out “MAIN PROGRAM” with console.log.
*/

'use strict'

let prom = new Promise((resolve, reject) => {
    resolve('PROMISE VALUE');
});

prom.then(result => console.log(result));

console.log('MAIN PROGRAM');