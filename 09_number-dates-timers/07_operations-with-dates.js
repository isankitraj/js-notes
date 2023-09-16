'use strict';

const future = new Date(2037, 10, 19, 15, 23);

console.log(Number(future));  // same thing is goint to happen when we use + operator
// now we can perform operations

const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24))

const days1 = calcDaysPassed((new Date(2037, 3, 14)), (new Date(2037, 3, 24)));
console.log(days1); // we will get the milliseconds// now we just need to convert this milisceonds to date back again


