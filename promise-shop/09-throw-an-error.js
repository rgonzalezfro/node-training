/**
 * Some invalid JSON will be available on process.argv[2].

    * Build a function called `parsePromised` that creates a promise,performs `JSON.parse` 
    in a `try`/`catch` block, and fulfills or rejectsthe promise depending on whether an 
    error is thrown.**Note:** your function should synchronously return the promise!

    * Build a sequence of steps like the ones shown above that catchesany thrown errors 
    and logs them to the console.
*/

'use strict'

const invalidJson = process.argv[2];

function parsePromised(json) {
    try {
        return Promise.resolve(JSON.parse(json));
    } catch (error) {
        return Promise.reject(error);
    }
}

parsePromised(invalidJson)
    .catch(error => console.log(error.message));