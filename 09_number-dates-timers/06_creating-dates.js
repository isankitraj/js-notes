'use strict';

// create a  date - four ways to create a date in js
const now = new Date();

console.log(now);

// parsing the date from a date string
// console.log(new Date('December 24, 2015'));
console.log(new Date('2023-09-07T15:10:03.401Z'));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33));

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.toUTCString());

console.log(future.getTime()); // miliseconds of time passed sidnce that date


console.log(new Date(2142237180000).toUTCString());

console.log(Date.now());

future.setFullYear(2040)
console.log(future);







