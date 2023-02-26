'use strict'

// №1 

class Cola {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price
    }
}
class Whiskey {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price
    }
}
class Ice {
    constructor(price) {
        this.price = price
    }
}

let mixin = {
    vat () {return this.price + this.price*0.2},
    exciseDuty () {return (this.price + this.price*0.3) + 10},
    singleTax () {return this.price += + 1}
}
Object.assign(Cola.prototype, mixin)
Cola.prototype.vat()

Object.assign(Whiskey.prototype, mixin)
Cola.prototype.exciseDuty()

Object.assign(Ice.prototype, mixin)
Cola.prototype.singleTax()

let cocaCola = new Cola ('Coca-cola', 10)
let johnWalker = new Whiskey ('john walker', 100);
let ice = new Ice (2);

console.log(cocaCola.vat());
console.log(johnWalker.exciseDuty());
console.log(ice.singleTax());

// №2

function uniceString(string) {
    let unique = string.split('; ')
    // console.log(unique);
    return new Set(unique);
  }

 console.log(uniceString('cherry; orange; cherry; banana; banana'));

// №3 
