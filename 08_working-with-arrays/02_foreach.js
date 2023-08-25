'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// negativevalue withdrawal , positive value deposit.

// using for of loop
for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}

// using for each - higher order function which takes a callback function

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// iteration
// 0: funtion(200)
// 1: funtion(450)
// 2: funtion(400)

// what if need index of arrays
// in for of loop
for (const [index,movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`${index+1}: You deposited  ${movement}`);
    } else {
        console.log(`${index+1}: You withdrew ${Math.abs(movement)}`);
    }
}

// for each method to get index // in the callback function, first argument is always the element of array, second is the index, and third is the array from which that element is passed.
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`${index + 1}: You deposited  ${movement}`);
  } else {
    console.log(`${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
  console.log(array);
});


// continue and break keywords do not work in foreach loop at all
// so you cannot stop a foreach loop before completing iterations. it will always loop over the entire array.