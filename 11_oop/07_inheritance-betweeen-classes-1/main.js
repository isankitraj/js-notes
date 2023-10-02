// inherit classes using constructor function


//  person consturctor funciton
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};


// student constructor funciton
const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear) /// using this
    this.course = course;
}

// linking student.prototype to person.prototype using object.create
Student.prototype = Object.create(Person.prototype)

// Student.prototype = Person.prototype // this wont work, we need ot use object.prototype.



Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
    
}

const mike = new Student('Mike', 2020, 'cse');
console.log(mike);

mike.introduce();

// now we should be able to do
mike.calcAge() // this worked because of prototype chain.


console.log(Student.prototype.constructor); // this should point to student. but it is pointing to Person. to fix this
console.dir(Student.prototype.constructor); // this should point to student. but it is pointing to Person. to fix this


/// easy ot fix
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // this should point to student. but it is pointing to Person. to fix this

