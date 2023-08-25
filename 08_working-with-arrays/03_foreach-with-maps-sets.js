'use strict';


// map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});


//set
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique);


// passing _ meaning (unnecessary arguement)
currenciesUnique.forEach(function (value,_,set) {
    console.log(`${value} `);
    console.log(set);
})