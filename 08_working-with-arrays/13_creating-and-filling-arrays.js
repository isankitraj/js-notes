'use strict';

const arr = [1,2,3,4,5,6,7];


// creating arrays programatically

const x = new Array(7); // create array with 7 empty argument.
console.log(x);

console.log(x.map(() => 5)); // nothing will happen

// we can use fill method here
x.fill(1, 3, 5);
console.log(x);


arr.fill(23, 4,6)
console.log(arr);


//  using Array.from to create a programatically.
const y = Array.from({length: 7}, () => 1)
console.log(y); // creates an array with 7 ones


const z = Array.from({length: 7}, (curr, i) => i + 1); //
console.log(z);

const z1 = Array.from({length: 7}, (_, i) => i + 1); // _ throwaway variable.// It means we don't need this parameter



// generating 100random dice rolls
const rolls = Array.from({length: 100}, () => Math.trunc(Math.random() * (6 - 1 + 1) + 1))
console.log(rolls);


// we can create arrays from other things. like iterables like maps, sets , strings.. they all can be converted to arrays using arrys.from
// QueryselectorAll in dom, returns a nodelist, which is something like an arrays which conatain all the selected elements. Its not the real array. so it does not have array methods.
// so we need to convert it to array first.

