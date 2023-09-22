'use strict';

// Array.from(); // this method is used to convert any array like structure to real array.

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static myStaticMethod() {
    console.log(
      'hello this is the static method of human constructor function'
    );
  }
}


const ankit = new Human('Ankit', 23);

Human.myStaticMethod() // this method is only callable through clasname. it does not need any object.