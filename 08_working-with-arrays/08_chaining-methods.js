'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurotoUSD = 1.1;

// pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurotoUSD)
  //   .map((mov, i, arr) => {
  //     console.log(arr);
  //     return mov * eurotoUSD;
  //   })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
