'use strict';

// initially we have no way to create object programatically
// creating an object with constructor funciton


// constructor function always starts with Capital letter
// arrow function will now workd. only function declaration and function expression

const Person = function(firstName, birthYear){
    // console.log(this);

    this.firstName = firstName;
    this.birthYear = birthYear;


    // we should never create a method inside a constructor fucntion // this is a bad practice.
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // } // to solve this, we use prototypes.
}

// we call the consturctor function using new operator
const ankit = new Person('Ankit', 1991)
console.log(ankit);


///////////////////////what's happening when we use new keyword to call a function/////////
// 1. New empty object {} is created
// 2. Function is called, this keyword  is set to that empty object . this = {}
// 3. {} linked to prototype
// 4. funciton automatically return {} object
/////////////////////////////////////////////////////////////////////////////////

const matlida = new Person('Matilda', 2001)
const jack = new Person('jack', 1993)

console.log(matlida, jack);


console.log(ankit instanceof Person); // ture
