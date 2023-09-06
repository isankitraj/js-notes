'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

// base 10 - 0  to 9  1/ 10 = 0.1
// binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);  // false // due to bug


console.log(Number('23'));
console.log(+'23');  // this will convert the string to number.


// parsing /// whenever we need to get the number out of css.
console.log(Number.parseInt('30px')); // 30 // string only start with number in order to work parse int.
// console.log(Number.parseInt('e34')); // will not work


console.log(Number.parseInt('30px', 2)); 


console.log(Number.parseFloat('2.5rem')); // 2.5 // whitespace are also allowed
console.log(Number.parseInt('2.5rem')); // 2


// check if value is NaN
console.log(Number.isNaN(4)); //false
console.log(Number.isNaN('g')); //false
console.log(Number.isNaN(+'20x')); //true // this will not be a number.
console.log(Number.isNaN(23/0)); //infinity  // this is alos not a nan




// best way if the value is a number // ultimate method.
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23/0)); // false


console.log(Number.isInteger(23));
console.log(Number.isInteger(23/0));
console.log(Number.isInteger(23.0));

