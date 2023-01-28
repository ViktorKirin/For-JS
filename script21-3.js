"use strict"

function createLaptop (brand, system, cost) {
    this.brand = brand;
    this.system = system;
    this.cost = cost;

}

let dell = new createLaptop ('Dell', 'windows', 800);

let apple = new createLaptop ('Apple', 'MAC OS', 1700);

console.log(dell);
console.log(apple);

