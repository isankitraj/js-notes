'use strict';

// console.log('Your order is cooking...🍪');

// setTimeout(() => {
//     console.log('Here is your pizza🍕');
// }, 3000);  // this code will run after 3000ms  // js will count the time in background.
// console.log('waiting....'); // this line will be executed first.

// // how can we pass argument to that callback funciton, it is preety dificult as we are not calling the funciton .

// // setimeout has one solution for that
// // all the argument we pass after the delay will be the argument of the callback function.
// const ingredient = ['olives', 'spinach']

// const pizzatimer = setTimeout((ingredient1, ingredient2) => {
//     console.log(`Here is you pizza with ${ingredient1} & ${ingredient2}`);
// }, 3000, ...ingredient);

// if (ingredient.includes('spinach')) {
//     clearTimeout(pizzatimer) // cancelling the timeout
// }

// lets build a real clock using settimeinterval

setInterval(() => {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);
  const sec = `${now.getSeconds()}`.padStart(2, 0);
  console.log(`${hour}:${min}:${sec}`);
}, 1000);
