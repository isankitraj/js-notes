'use strict';

const Person = function(firstName, birthYear){
    // console.log(this);

    this.firstName = firstName;
    this.birthYear = birthYear;

}

const ankit = new Person('Ankit', 1991)

// protypes.
console.log(Person.prototype);


// protypical inheritance
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

ankit.calcAge() // 46

console.log(ankit.__proto__);


Person.prototype.species = 'Homo Sapiens';
console.log(ankit.species);


console.log(ankit.hasOwnProperty('firstName')); // quite helpful in some situation
console.log(ankit.hasOwnProperty('species'));



// changing prototype method. all method will inherit 
const arr = [3,4,5,6,6,7]

// this is not a good idea // ignore using it.
Array.prototype.unique = function(){
   return [...new Set(this)]
}

console.log(arr.unique());
