'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// const dogs = [
//   { weight: 22, curFood: 250, owners: "bob" },
//   { weight: 8, curFood: 200, owners: 'matilda' },
//   { weight: 13, curFood: 275, owners: 'sarah' },
//   { weight: 32, curFood: 340, owners: 'mike' },
// ];

// task 1
dogs.forEach(dog => {
  // console.log(dog);
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});




// task 2
const okayAmount = function (current, recommendedFood) {
  return current > recommendedFood * 0.9 && current < recommendedFood * 1.1;
};
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  sarahDog.curFood > okayAmount(sarahDog.curFood, sarahDog.recommendedFood) ? "eating too much" : "eating too less"
);

// console.log(sarahDog);

