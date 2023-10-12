'use strict';

const lotteryPromise = new Promise(function (resolve, reject) {
  // executor function
  if (Math.random() >= 0.5) {
    resolve('You WIN💥💥');
  } else {
    reject('You lost your money.😔');
  }
});

// consuming the promise.
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
