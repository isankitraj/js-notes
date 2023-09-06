'use strict';


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// use filter to get deposits.
const deposits = movements.filter(function (mov, i, arr) {
    return mov > 0;
})
console.log(deposits);


// refactoring above using arrow function but for withdrawal
const withdrawal = movements.filter((mov) => mov < 0)
console.log(withdrawal);
console.log(withdrawal.map((num) => Math.abs(num))); // see how cool is map method.





// doing same thing but using for of loop
const depositsFor = [];
for (const mov of movements) {
    if (mov > 0) {
        depositsFor.push(mov)
    }
}
console.log(depositsFor);