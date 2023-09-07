'use strict';

// use numeric separator

const diameter = 28756000000;
// we can make it more readable using numberic separator.

const diameter2 = 28_756_000_000; // same as code in line 5 but more readable
console.log(diameter2);

// when we try to convert a string to number that contain a underscodre, it won't owrk
console.log(Number('34564_00')); //this won't work
console.log(parseInt('238_456')); // only 238


// use these numeric separator only for readablility
