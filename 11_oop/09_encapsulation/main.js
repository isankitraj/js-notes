'use strict';

// public fields
// private fields
// public mehthods
// private methods
// There is also static version


class Account {

    // Public fields
    locale = navigator.language;  // we dont need any cont or let 😂// this is how we declare public fields inside a class
    
    // Private fields
    #movements = [];
    #pin;  //
    
    
    constructor(owner,currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        // this.movements = [];  //creating properties that are not based on any inputs.
        this.locale = navigator.language;
        

        console.log(`Thanks for opening an account,${this.owner}`);
        
    }


    // Public interface
    getMovements(){
        return this.#movements;
    }




    // these methods are interface to our object, we call them also API
    deposit(val) {
        this.movements.push(val)
    }

    withdraw(val){
        this.deposit(-val); // calling a method inside a method.
    }

    approveLoan(val){
        return true;
    }

    requestLoan(val){
        if (this.approveLoan) {
            this.deposit(val);
            console.log('Loan approved');
            
        }
    }
}

const acc1 = new Account('Ankit', 'EUR', 1111);

// // acc1.movements.push(250);
// // acc1.movements.push(-100);

// acc1.deposit(250);
// acc1.withdraw(140)
// console.log(acc1);
// acc1.requestLoan(1000)
// // we are also able to do this
// acc1.approveLoan(1000)// this should not be allowed in real world. // hence we need data privacy and encapsulation

// console.log(acc1.pin);  // this should not be allowd. as this is the private onw



///////////////ENCAPSULATION/////////////////////
console.log(acc1.getMovements());
// console.log(acc1.movements);  // this would not work. now we have true private properties.



