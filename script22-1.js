"use strict"

let user = ['Mike', 'Nikola', 'Tom'];

// Покзать элемент с индексом 2
console.log(user[2]);

// Замена элемента Nicola на Alex
console.log(user.indexOf('Nikola', 0));
user.splice(1, 1, 'Alex');
console.log(user);

// Удаление 2ух последних элементов массива
user.length = user.length - 2;
console.log(user);

// Длинна массива
console.log(user.length)


// Задание №2
let a = [5, 3 -4, 25, 32, -16, 6];
let b = [21, -30, 9, 5, 12, -19, 5, 25];

let sumA = 0;
let sumB = 0;
let result;

    for (let i = 0; i < a.length; i++) 
        sumA += a[i];
        console.log(sumA);

    for (let i = 0; i < b.length; i++)
        sumB += b[i];
        console.log(sumB);

    if (sumA > sumB ) {
       result = 'a > b';
    } else if ( b > a) {
        result = 'b > a';
    }else if ( b === a) {
        result = 'b = a';
    }

console.log(result);

// Задание №3 
let phrase = 'I am learning JavaScript right now'
phrase = phrase.split(' ');
console.log(phrase);


// Задание №4

let arrayA = [5, 3, 8, 5, 3, 2, 1, 2];
let arrayB = [];

arrayA.forEach((element) => {
    if (arrayB.includes(element, 0)) {
    } else {
        arrayB.push(element);
    }
    return arrayB;
})
console.log(arrayB);

// Задание №5

let users = [
    { id:1, age:17},
    { id:2, age:18},
    { id:3, age:19},
    { id:4, age:21},
    { id:5, age:17},
    { id:6, age:20},
    { id:7, age:25},
];
let newArray = [];
function selectionAge () {
    users.forEach((element) => {
        if (element.age > 18 && element.age < 21 ) {
            newArray.push(element.id);
             }
    })
}   
selectionAge (users);
console.log(newArray);
