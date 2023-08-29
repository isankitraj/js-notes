'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// all the accounts
const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////////////////////////////////
const displayMovements = function (movements) {
  // first empty the movements container
  containerMovements.innerHTML = ''; // innerHTML is similar to the textcontent. the only difference is that text content only returns the text content of an element while innerHTML returns the whole element with html tags also.

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // template literals are amazing to create html like below
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>
`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// now to add this above generated html to a contianer, we will use insertadjacent element

///////////////
// computing usernames from the object
/////////////////
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(user => user[0])
      .join('');
  });
};

createUsernames(accounts);

/// calculating total balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// calculating in, out and interest
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = acc.movements
    .filter(val => val < 0)
    .map(val => Math.abs(val))
    .reduce((acc, val) => acc + val, 0);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(val => val >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${out}€`;
  labelSumInterest.textContent = `${interest}€`;
};

// // using find method // this is really really powerful
// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account);

// // doing same with for of loop
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }
// }

/// login feature
// Event handler
const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);

  // display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // prevent form from submitting.

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // emptying the login fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // updating the ui
    updateUI(currentAccount);
  }
});

// transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    account => inputTransferTo.value === account.username
  );
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //doing the transefer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // upating the ui
    updateUI(currentAccount);
  }
});

// close account - find index method of array - works same as find, it returns the index of found eleemnt and note the element itself
btnClose.addEventListener('click', function (e) {
  e.preventDefault(); // to prevent it from ...

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // deleting the account
    accounts.splice(index, 1);

    // hiding the ui
    containerApp.style.opacity = 0;
  }

  // clearing the input fields.- it works only after reading the value from input field. this was a freaking bug.
  inputLoginUsername.value = inputLoginPin.value = '';
});

// some method -- requesting a bank loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    // Add the movement
    currentAccount.movements.push(amount);

    // update the ui
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});




// using flat method to calculate the total movments.
const accountMovements = accounts.map(acc => acc.movements); // this will return an array of movements of different acconts
const allMovements = accountMovements.flat().reduce((acc, mov) => acc + mov, 0); // this will give total movements of all the accounts and sum it all up.
console.log(allMovements);


// flatmap combines both flat and map methods of array
const overallBalance2 = accounts.flatMap(acc => acc.movements)
console.log(overallBalance2);
// flatmap only goes 1 level deep and we cannot change it. for more nested use flat.