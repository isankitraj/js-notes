'use strict';


class PersonCL {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // methods will be added to .prototype property.
    calcAge(){
        console.log(2037 -  this.birthYear);
    }

}

class Student extends PersonCL {
    constructor(fullName, birthYear, course){

        // always needs to happen first// super keyword wiill aways remain at top
        super(fullName, birthYear)
        this.course = course
    }
}


const ankit = new Student('Ankit', 2012, 'cse');
// const ankit1 = new Student('Ankit', 2012);

console.log(ankit);

