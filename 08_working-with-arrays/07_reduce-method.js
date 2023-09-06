'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // accumulator = snowball
// const globalBalance = movements.reduce(function (acc, num, i, arr) {
//   //   acc += num;
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + num;
// }, 0); // 0 is the initial value of accumulator.

// refactoring above code
const globalBalance = movements.reduce((acc, num) => acc + num, 0); // 0 is the initial value of accumulator.
console.log(globalBalance);

// let's do it manually using for of loop
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// maximum value of movement array
const maximumMovement = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   } 
    //refactoring above code.
    return acc > mov ? acc : mov; 
}, movements[0]); // setting iniital value of accumulator.

console.log(maximumMovement);