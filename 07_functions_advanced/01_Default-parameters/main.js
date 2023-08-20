"use strict";

const tickets = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199*numPassengers) {
  // ES5 WAY TO SET DEFUALT PARAMETERS
//   numPassengers = numPassengers || 1;
//   price = price || 199;

  const booking = {
    // using es6 way to create objects😊
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  tickets.push(booking);
};

createBooking("LM1234");

// we cannot skip any argument of the function like this - createBooking("LM12344",777)
// instead we can set the skipped arguments to 'undefined', this way funcition automatically assign default value to undefined values.
createBooking("LM1234", undefined, 34444);

