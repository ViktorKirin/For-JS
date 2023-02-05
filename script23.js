"use strict"
// Задание №1 - посчитать сумму массива

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function summ (arr) {
    // console.log(arr.length)
    if (arr.length  === 1) {
        return arr[0];
    }
    else {
        return  arr[0] + summ(arr.slice(1));
    } 
}
console.log(summ(arr));

// Задание №2 - посчитать количество элементов в массве

// let a = [1, 2, 3];
let b = ["x", "y", ["z"]] ;
// let c = [1, 2, [3, 4, [5]]];
let count = 0;

function deepCount(i) {
    for (let elem of i) {
        if (Array.isArray(elem)) {
          count++;
          deepCount(elem);
        }else {
          count = count + 1;
        }
      }
      return count
}
// console.log(deepCount(a));
console.log(deepCount(b));
// console.log(deepCount(c));

// console.log(deepCount([1, 2, 3])); //3
// console.log(deepCount(["x", "y", ["z"]])); //4
// console.log(deepCount([1, 2, [3, 4, [5]]])); //7


// Задание №3 - посчитать количество элементов в массве


const employees = {
 development: {
     backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
     frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
 },
 sales: {
     marketing: {
      internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
      promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
     },
     sellers: [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
    },
    designer: [{name: 'Kate', salary: 1800}]
    }

function sumSallary() {
    let sum = 0;
    return function sallary(obj) {
        for(let key in obj) {
            if (Array.isArray(obj[key])) {
            obj[key].forEach(employee => sum += employee.salary);
            } 
            else {
                sallary(obj[key]);
            }
        }
        // console.log(sum);
        return sum;
    }
}

console.log(sumSallary()(employees));



// Задание №4 - найти наибольшее значение

let arr1= [2, 15, 7, 3];
let arr2= [9, 3, 17, 12, 4, 8];
let arr3= [6, 11, 16, 15, 11];


let newArray = [...arr1,...arr2,...arr3];

console.log(newArray);
let max;

console.log(Math.max.apply(null, newArray))


// arr1.forEach((element) => {
//     if (maxValue.includes(element, 0)) {
//     } else {
//         maxValue.push(element);
//     }
//     return maxValue;
// })

// function newArray () {

// }

// function newArray ();

// function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
//   }