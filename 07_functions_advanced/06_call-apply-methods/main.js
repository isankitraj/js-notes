"use strict";

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

lufthnsa.book(239, "Ankit raj");
lufthnsa.book(635, "John Smith");
// console.log(lufthnsa);

// another object
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthnsa.book; // this is possible because js has first class function.

// book(23, "Sarah Williams"); // will give eeroor beauausse book in now a function not a method, and this keyword of a function points to undefined.
// however we can make this function work by using call, apply and bind
// will continue...
// How can we tell js that this keyword points to which object. --> using three function named call, apply and bind.


// using the call method to invoke the book with eurowinds
book.call(eurowings, 123, "Alice Brow");
console.log(eurowings);

book.call(lufthnsa, 239, "Mary Cooper");
console.log(lufthnsa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Dan steve")
console.log(swiss);


// using the apply method ot inove the lufthnsa.book with eurowings
const flightData = [583, 'George Cooper']
// book.apply(swiss, flightData)
// this apply method is not used in modern javasrcipt we have a better way of doing it.

// instead we use this
book.call(swiss, ...flightData);  // using spread operator
