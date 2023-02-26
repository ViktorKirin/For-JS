'use strict'

// Задание №4 

let mike = {name:'Mike', age: 18}
let bob = {name:'Bob', age: 25}
let nikola = {name:'Nikola', age: 32}


// тут должны быть функции счетчики - каждый вызов функции +1
function mikeCounter() {
    let count = 0; 
    return function () {
        return count++
    };
}
function bobCounter() {
    let count = 0; 
    return function () {
        return count++
    }
}
function nikolaCounter() {
    let count = 0; 
    return function () {
        return count++
    }
}

let mikeVisits = mikeCounter();
let bobVisits = bobCounter();
let nikolaVisits = nikolaCounter();


mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisits(bob);
nikolaVisits(nikola);
nikolaVisits(nikola);

// тут должны быть Мар - которые создают для каждого объекта Мар, где объект каждого посетителя - ключ, а функция - это значение ключа
let userVisits = new Map()
userVisits.set(mike, mikeVisits())
userVisits.set(bob, bobVisits())
userVisits.set(nikola, nikolaVisits())

console.log(userVisits.get(mike)); //3
console.log(userVisits.get(bob)); //1
console.log(userVisits.get(nikola)); //2


// пример счетчика -замыкание


// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter1 = makeCounter();
//   let counter2 = makeCounter();
  
//   console.log( counter1() ); // 0
//   console.log( counter1() ); // 1