"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet("Hey");
greetHey("Ankit");
greetHey("Steven");


greet('Hello')('Ankit') // greet('hello') will return a function and that function will take 'Ankit' as a parameter and prints the output


// rewriting above function using arrow functions only

const greet2 = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}

greet2('Hola')('Ankit')