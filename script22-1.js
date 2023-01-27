"use strict"

let car = {
    model: 'Volkswagen',
    year: 2020,
    color: 'darkblue',
    signal: function () {
       alert("Fa!Fa!");
    },
}
car.color = 'black';
console.log(car.color);

car.type = 'electric';
console.log(car.type);

car.signal();

