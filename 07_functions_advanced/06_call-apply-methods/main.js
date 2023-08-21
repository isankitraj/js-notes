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
console.log(lufthnsa);

// another flight
const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
  book,
};

const book = lufthnsa.book; // this is possible because js has first class function.

// book(23, "Sarah Williams"); // will give eeroor beauausse book in now a function not a method, and this keyword of a function points to undefined.
// however we can make this function work by using call, apply and bind
// will continue...