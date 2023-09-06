'use strict';
// console.log(Math.sqrt(25));
// console.log(25 ** (1 /2));
// // calculating cubic root
// console.log(8 ** (1/3)); // only way if you need to calculate cubic roots



// console.log(Math.max(2,6,8,3,2));
// console.log(Math.max(2,6,'8',3,2));  // this will automatically convert the string to the number.
// console.log(Math.max(2,6,'8px',3,2));



// console.log((Math.PI * Number.parseFloat('10px') ** 2));

// // random function
// console.log(Math.random());
// console.log(Math.trunc(Math.random() * 6)); // 6 will not be included
// console.log(Math.trunc(Math.random() * 6) + 1); // 6 will be included


// generalizing the random function so that we can use it anywhere
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(2,5));


// rounding integers
console.log(Math.trunc(23.3)); // removes the decimal part of a number
console.log(Math.round(23.3)); ///23
console.log(Math.round(23.9)); ///24

console.log(Math.ceil(23.3)); ///24
console.log(Math.ceil(23.9)); ///24

console.log(Math.floor(23.3)); ///23
console.log(Math.floor(23.9)); ///23


// for negative number trunc does not work this way
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3)); // floor works with negative inputs also.


// Rounding decimals
console.log((2.4).toFixed(0));  // to fixed return string
console.log((2.4).toFixed(3));   //2.400
console.log((2.345).toFixed(2));   // 2.35
// above outputs are strings, if we want to convert them to number, then just simple put the + symbol before.
console.log(+(2.345).toFixed(2));   // 2.35 number 