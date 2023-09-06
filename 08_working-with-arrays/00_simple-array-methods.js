// array are also object that is why they have access to some special methods.

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));  // this method returns a new array which contains the sliced part.
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1)); // gives the last element of an array always
console.log(arr.slice(1,-2));

// using slice method to create a shallow copy of an array
console.log(arr.slice()); // creates a shallow copy
// or using spread operator to create a shallow copy
console.log([...arr]);


// splice - same as slice but it does changee the original array
// console.log(arr.splice(2));
// remove last elelemnt of an array
console.log(arr.splice(-1));
console.log(arr); // extracted elemeenst are gone away.


// reverse an array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j','i','h','g','f'];

console.log(arr2.reverse()); // it mutates the original array
console.log(arr2);


// concat two arrays
const letters = arr.concat(arr2);
console.log(letters);

// or use spread operator.
console.log([...arr, ...arr2]);  // it does not muated oriignal array.

// join method
console.log(letters.join('-'));