/**
 * Write a program that accepts one or more numbers as command-line arguments
 * and prints the sum of those numbers to the console (stdout).
 */

'use strict'

let args = process.argv
let sum = 0;

for (let index = 2; index < args.length; index++) {
    sum += +args[index];
}

console.log(sum)