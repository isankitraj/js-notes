'use strict';

const account = {
    owner: 'Ankit',
    movements: [234,500,600,200],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov)
    }
}

console.log(account.latest);

account.latest = 50; // setting the properyt
console.log(account.movements);



/// getters and setter in classes

class PersonCL {
    constructor(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }

    // methods will be added to .prototype property.
    calcAge(){
        console.log(2037 -  this.birthYear);
    }

    get age(){
        return 2037 - this.birthYear;
    }

    set name(name){
        console.log(name);
        
        if (name.includes(' ')) {
            this._fullName = name
        } else {
            console.log(`${name} is not a full name.`);
            
        }
    }
}


const ankit = new PersonCL('Ankit', 2002);

console.log(ankit.name); // 35
