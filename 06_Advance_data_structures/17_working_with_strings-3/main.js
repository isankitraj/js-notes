'use strict'


// split and join
console.log('a+very+nice+string'.split('+')); // store the splitted elements in an array.
console.log('Ankit Raj'.split(' ')); // this is really useful


const [firstName, lastName] = 'Ankit Raj'.split(' ') // destructring immediatly  // we could have done this with slice method, but that may be a lot of complicated.

console.log(firstName, lastName); // how cool is this.😂😊

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ') // join works opposite of the split.
const newName = ['Mr.', firstName, lastName.toUpperCase()].join('--') // join works opposite of the split.
console.log(newName);

// combination of split and join is really powerful



const passenger = 'jessica and smith davis'

const capitalizeName = function (name) {
    const names = name.split(' ')
    const namesUpper = []

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1)) // one way
        namesUpper.push(n.replace(n[0],n[0].toUpperCase()))  // another way
    }

    console.log(namesUpper.join(' '));
}



capitalizeName('jessica and smith davis')
capitalizeName('ankit raj')


// padding a string
const message = 'Go to gate 23!'
console.log(message.padStart(25,'+'));
console.log('Ankit'.padStart(25,'+').padEnd(35,'+'));

// real world use case of padding. - credit card number xxxx
const maskCreditCard = function (number) {
    const str = number + '' // same as using String(num) // this will convert the number to stringg
    const last = str.slice(-4);
    return last.padStart(str.length,'*')
}


console.log(maskCreditCard(3424267));
console.log(maskCreditCard(433633352236));
console.log(maskCreditCard('3569432826232'));



// Repeat method
const message2 = 'Bad weather... All Departures Delayed... '
console.log(message2.repeat(6));


// fun funciton
const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'✈️ '.repeat(n)}`);
}

planesInLine(8);