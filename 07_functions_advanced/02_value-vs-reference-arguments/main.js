const flight = 'LH234';
const ankit = {
  name: 'Ankit raj',
  passport: 233422395358,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr' + passenger.name;

  if (passenger.passport === 233422395358) {
    console.log('Checked in');
  } else {
    console.log('Wrong passoport');
  }
};

checkIn(flight, ankit);
console.log(flight);  //LH234 // value doesnot changes
console.log(ankit); // reference type // value changed


// keep this behaviour of js in mind while passing objects to the functions as arguments.

