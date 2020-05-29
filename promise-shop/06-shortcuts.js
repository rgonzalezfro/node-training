/**
 * We don’t have any specific task we’d like to assign to you for this lesson.
    Feel free to explore all three functions at your own pace. When you are
    preparing to submit though, make sure you are using at least catch and one
    of Promise.resolve and Promise.reject ☺
*/

'use strict'

let prom = Promise.reject(new Error('PROMISE REJECTED'));

prom.then(result => console.log(result))
    .catch(onReject);

function onReject(error) {
    console.log(error.message)
}