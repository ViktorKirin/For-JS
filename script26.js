'use strict'


// Задание №1 наследование свойств объектов

let car = {
    type: "electric",
    wheels: 4,
}

let sportCar = {
    doors: 2,
}

let passengerCar = {
    doors: 4,
}

let toyCar = {
    type: "toy",
}
// Object.setPrototypeOf(obj, proto)
Object.setPrototypeOf(sportCar, car);
Object.setPrototypeOf(passengerCar, car);
Object.setPrototypeOf(toyCar, sportCar);

// console.log(car);
// console.log(sportCar);
// console.log(passengerCar);
// console.log(toyCar);
console.log(Object.getPrototypeOf(toyCar));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(toyCar)));
console.log(`${Object.getPrototypeOf(toyCar)} and ${Object.getPrototypeOf(Object.getPrototypeOf(toyCar))}`)

// Задание №2 Исправить код, начисление заработной платы каждому специалисту

let employees = {
    wallet: {},
    pay (munth, sum) {
    this.wallet[munth] = sum;
    }
}

let frontendDeveloper = {
    name: 'Mike',
    wallet: {},
}
Object.setPrototypeOf(frontendDeveloper,employees);
frontendDeveloper.pay('june', 1600);


let backendDeveloper = {
    name: 'Bob',
    wallet: {},
}
Object.setPrototypeOf(backendDeveloper,employees);
backendDeveloper.pay('june', 1500);

console.log(backendDeveloper.name);
console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.name);
console.log(frontendDeveloper.wallet.june);


// Задание №3 Используя объект user_1, создайте пользователя user_2, который будет иметь имя Bob, age 25

function User (name, age) {
    this.name = name;
    this.age = age;
}

let user_1 = new User ('Mike', 18);

let user_2 = new user_1.constructor('Bob', 25);

console.log(user_1);
console.log(user_2);

// Задание №4 

function Usertype(name) {
    for (let i = 0; i < name.lenght; ++i) {
        this[i] = name[i];
        if (i + 1 == name.lenght) {
            Object.defineProperty (this, 'lenght', {
                enumerable: true,
                writable: false,
                configurable: true,
                value: i + 1
            });
        }
    }
}

let admins = new Usertype (['Mike', 'Bob', 'Nikola']);
admins.join = Array.prototype.join;
console.log(admins.join('; '));