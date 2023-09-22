'use strict';

// // class expression
// const PersonCL = class{

// }


// class declaration
class PersonCL {
    constructor(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }

    // methods will be added to .prototype property.
    calcAge(){
        console.log(2037 -  this.birthYear);
    }

}

const ankit = new PersonCL('Ankit', 2002)
console.log(ankit);
ankit.calcAge() 

console.log(ankit.__proto__ === PersonCL.prototype);



PersonCL.prototype.greet = function(){
    console.log(`Hey ${this.name}`);
}

ankit.greet()


// 1. classes are Not hoisted. 
// 2. Classes are first class citizens.
// 3. classes are executed in strict mode.v