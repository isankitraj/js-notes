'use strict';

const PersonProto = {
    calcAge(){
        console.log(2037 - this.year); 
    },

    init(name, year){
        this.name = name;
        this.year = year;
    }
};


const ankit = Object.create(PersonProto)  // this will return a new object with the linked prototype.
console.log(ankit);
ankit.init('Ankit', 2002)

ankit.calcAge() // 35

console.log(ankit.__proto__ === PersonProto);


// this is the least way to use protypical inheritance.
