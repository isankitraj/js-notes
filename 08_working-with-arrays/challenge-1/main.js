'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = [...dogsJulia];
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-2);
//   console.log(dogsJuliaCopy);

  const corrected = [...dogsJuliaCopy, ...dogsKate];
  corrected.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
    } else if (age < 3) {
      console.log(`Dog number ${i+1} is still a puppy`);
    }
  });
};

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

checkDogs(dogsJulia,dogsKate);
