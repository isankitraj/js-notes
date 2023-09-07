'use strict';

console.log(5 % 2); //2*2 + 1 // this one is returned here // 1 
console.log(5/2);

console.log(8%3);
console.log(8/3); // 8 = 2 * 3 + 2


// divisible by 2 or any other number
console.log(6 % 2); // 0// hence 6 is divisible by 2


const isEven = n => n % 2 === 0;
console.log(isEven(4));

// real applications of remainder
// Whenever you need to do something every Nth time then it is good idea to use remainder operator
