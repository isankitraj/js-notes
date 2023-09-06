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
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  sarahDog.curFood > sarahDog.recommendedFood
    ? 'eating too much'
    : 'eating too less'
);

// task 3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// tast 4
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too Little!`);

// task 5
const check = dogs.some(dog => dog.curFood === dog.recommendedFood);
// console.log(check);

// task 6
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

// const okay = dogs.some(
//   dog =>
//     dog.curFood > dog.recommendedFood * 0.9 &&
//     dog.curFood < dog.recommendedFood * 1.1
// );
console.log(dogs.some(checkEatingOkay));


// task 7
const okayDogs = dogs.filter(checkEatingOkay).flatMap(dog => dog.owners)
console.log(okayDogs);


//task 8
const shallowCopy = [...dogs]  // or you can use slice mehtod to create a shallow copy
shallowCopy.sort((a,b) => a.recommendedFood - b.recommendedFood)
console.log(shallowCopy);
console.log(dogs);
