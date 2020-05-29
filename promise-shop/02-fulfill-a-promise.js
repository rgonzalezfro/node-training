/**
 * Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
    executor after a delay of 300ms, using setTimeout.

    Then, print the contents of the promise after it has been fulfilled by passing
    console.log to then.
*/

'use strict'

let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('FULFILLED!')
    }, 300);
});

prom.then((result) => console.log(result));