class Calculator {
    num = 0; // we can use public field without using constructor in es6 class.
    
    sum(value){
        this.num += value;
        return this; // with this we can chain method of this class objects.
    }

    subtract(value){
        this.num -= value;
        return this;
    }
}

const calc = new Calculator();
calc.sum(4).sum(4).subtract(2); // we can chain any method as long as we return this object from it.

console.log(calc.num);
