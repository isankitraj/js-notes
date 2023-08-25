'use strict';

const arr = [23,11,64]
console.log(arr[0]);
// the new at method to access method.
console.log(arr.at(0));  // very new method es2021

// getting the last ellement of array
console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);

// using the new at method
console.log(arr.at(-1)); // super easy // most useful
console.log(arr.at(-2)); // super easy

// this also works on string
console.log('Ankit').at(0); //A
console.log('Ankit').at(-1); // t
