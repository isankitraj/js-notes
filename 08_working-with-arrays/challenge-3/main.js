'use strict';

const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    .map(dogAge => {
      if (dogAge <= 2) {
        return 2 * dogAge;
      } else if (dogAge > 2) {
        return 16 + dogAge * 4;
      }
    })
    .filter(val => val >= 18);

  const avg = humanAges.reduce((acc, val) => acc + val, 0) / humanAges.length;
  return avg;
};

// calling the function
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
