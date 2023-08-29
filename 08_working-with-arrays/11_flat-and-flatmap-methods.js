'use strict';

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// using flat method to get all the nested element.
// console.log(arr.flat());  // we flatened the array

// doing above thing another way
// console.log([...arr[0], ...arr[1],...arr[2]]);


const arrDeep = [
    [[[1, 2], 3]],
    [4, [5, 6]],
    [7, 8, 9],
  ];
  
// Now flat above deeply nested array
// console.log(arrDeep.flat());
// flat method only goes one level in nesting



// we can use this to fix
console.log(arrDeep.flat(3)); // defining the deep level. 3 nesting deep