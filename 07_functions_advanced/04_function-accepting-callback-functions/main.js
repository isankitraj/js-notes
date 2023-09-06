"use strict";

// very much used thing in js
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // functions even have properties that we can access. 😂
};

// transformer('Javascript is the best!', upperFirstWord) // if we simply write the funciton name then it means we are just passing that funciton as an argument, but not calling it immediatly.
transformer("Javascript is the best!", oneWord); // if we simply write the funciton name then it means we are just passing that funciton as an argument, but not calling it immediatly.

// another example//
const high5 = function () {
  console.log("👋");
};

// document.body.addEventListener("click", high5); // high5 is the callback function and addeventlistener is the hihger order function.

// js uses callbacks all the time
["Jonas", "Martha", "Adam"].forEach(high5); // high5 is the callback function

// advantages of callback function
// callback function able to provide abstraction.


