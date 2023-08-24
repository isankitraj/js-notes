"use strict";

// very important to underst
// bind also allow us to manually set this keyword for any function call.
// bind does note immediately call function instead it returns a new funciton, where the this keyword is bound
const lufthnsa = {
  airline: "Lufthnsa",
  iataCode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

// using bind method
const book = lufthnsa.book;

const bookEW = book.bind(eurowings); // this will not call the book function where this keyword will always be set to Eurowings.
const bookLH = book.bind(lufthnsa);
const bookLx = book.bind(swiss);

// next level - partial application - a part of arguemtn of origin function is already applied.
const bookEW23 = book.bind(eurowings, 23); // first argument of book willb set to 23 by default // we could also set name for it if we want.

bookEW(23, "Steven willimas");
bookEW23("Ankit raj");

// with Event Listeners

lufthnsa.planes = 300;
lufthnsa.buyplane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// will be used may times
// document.querySelector('.buy').addEventListener('click', lufthnsa.buyPlane.bind(lufthnsa)) // this keyword will point to buy button. // really need some explanation.

// another use case partial applicaton - partial application means we can preset the arguments
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

// function returning a function.

const addvat1 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addvat1(0.23);
console.log(addVat2(100));