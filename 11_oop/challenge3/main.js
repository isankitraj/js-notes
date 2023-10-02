'use strict';

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed++;
    console.log(`${this.make} is going at ${this.speed} mph.`);
    
}


// EV 
const EV = function(make, speed, charge){
    Car.call(this, make, speed)
    this.charge = charge;
}


// linking prototype - this way the object of EV can have access to the properties of car prototype also.
EV.prototype = Object.create(Car.prototype)


EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}


EV.prototype.accelerate = function(){
    console.log(`Tesla going at ${this.speed+=20}Km/h, with a charge of ${this.charge--}%`);
    
}

// const audi = new Car('audi', 50)
// audi.accelerate()
// audi.accelerate()
// audi.accelerate()
// audi.accelerate()

const Tesla = new EV('Tesla', 50, 20);
Tesla.accelerate();
Tesla.accelerate();
Tesla.accelerate();
//
