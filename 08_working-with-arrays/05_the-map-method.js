'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

// const movementsUSD = movements.map(function (val) {
//   return val * euroToUsd;
// });

// refactroing using arrow functions.
const movementsUSD = movements.map(mov => mov * euroToUsd);
// we can also us for of loop. but this is more easy to read. and support functional programming paradigm.

console.log(movements);
console.log(movementsUSD);
