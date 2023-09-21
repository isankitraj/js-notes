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
