'use strict';

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'
// plus sign acts as a seperator in above data. 


// console.log(flights.split('+'));


for (const flight of flights.split('+')) {
   const [type,from,to,time] =  (flight.split(';'))
//    const fomrattedType = type.padStart(19,' ')
//    console.log(fomrattedType);

   const output = `${type.startsWith('_Delay') ?'🔴' : ''}${type.replaceAll('_',' ')} from ${from.toUpperCase().slice(0,3)} to ${to.toUpperCase().slice(0,3)} (${time.replace(':','h')})`.padStart(50);
   console.log(output);

}