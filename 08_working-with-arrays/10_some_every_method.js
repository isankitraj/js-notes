'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// to test whether an array containes the element.
console.log(movements.includes(-130));

console.log(movements.some(mov => mov === -130));

// what if we want to test based on some condition
const anyDeposit = movements.some(mov => mov > 5000);
console.log(anyDeposit); // false

// every method // -similar to some method
// every method only returns true if every element in the array satisfy the condition
console.log(movements.every(mov => mov > 0)); // false





// cool thing.🤞🤞
// we can also write callback funciton separately
const deposit = mov => mov > 8; // and then we can pass it 
console.log(movements.every(deposit));
console.log(movements.some(deposit));
console.log(movements.filter(deposit));


