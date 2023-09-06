"use strict";

const runOnce = function () {
  console.log("This will never run again.");
};

runOnce();


// this function will run only once. this is IIFE
(function () {
  console.log("This will never run again.");

})();  // converting function into expression and immediatily called function here.

// IIFE with arrow function.
(() => console.log('This will also never run again.'))();




{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate); // cANT ACESS 
console.log(notPrivate);

