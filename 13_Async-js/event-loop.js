'use strict';

console.log('Test Start');   // 1st this will get executed

setTimeout(() => {
    console.log(`0 sec timer`);  // fourth this 
}, 0);  // these 0 is not a guranetee 😂

Promise.resolve('Resolved promise 1').then(res => console.log(res));   // third this


console.log('Test finished'); // second this 

