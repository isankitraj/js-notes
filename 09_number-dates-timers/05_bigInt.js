'use strict';

// numbers are represented as 64 bits// only 53 bits are used to storing the digits.

console.log(2 ** 53 - 1); // this is the biggest number that javascript can safely represent
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1); 



// unsafe numbers
console.log(999999999999999999999999999999999999999999999999999999999n); // this n transform into bigint.
console.log(BigInt(555555555555));

// operations with bigint
console.log(10000n + 10000n);


// we cannot mix bigint with numer
console.log(23333333333333333333333n + 34); // will give error.
