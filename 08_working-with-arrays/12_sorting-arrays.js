'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// Strings
const owners = ['Yesenia', 'Malvina', 'Loyce', 'Willow' ]
console.log(owners.sort()); // this command will mutate array.
console.log(owners);


// Numbers
console.log(movements);
console.log(movements.sort()); // unexepected answer

// reason behing is that sort method does the sorting based on strings.
// we can fix this by passing a callback function


// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Sorting in ascending order.
movements.sort((a,b) => {
    if (a > b) {
        return 1;  // returning number greater that 0
    } else if(b > a){
        return -1;
    }
}) 

console.log(movements); // our array is sorted in ascending order.



// sorting array in descending array.
movements.sort((a,b) => {
    if (a > b) {
        return -1;  // returning number less than 0
    } else if(b > a){
        return 1;
    }
}) 

console.log(movements);



// simplifying above code using math function
movements.sort((a,b) => a - b) // if a is greater that b the a - b will return a positive number and vice versa.
console.log(movements);

movements.sort((a,b) => b - a) // if a is greater than b then b - a will return a negative nubmer.




