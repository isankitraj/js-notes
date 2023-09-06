'use strict';


// use find method to retrieve an element based on a condition, unlike the filter method, it will not return the array, but it will return the first element in the array that satisfies this condidition.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.find(mov => mov < 0));

// difference betweeen filter and find method.
// 1. filter returns all the element which match the conditions. while find returns the first one.
// 2. filter returns a new array, find reuturnt the element itself and not the array.

console.log(bankist.accounts);



// // using find method // this is really really powerful
// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account);

// // doing same with for of loop
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }
// }