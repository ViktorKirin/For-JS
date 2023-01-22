"use strict"

function maxNumber (a, b) {
     if (a > b) {
        return 'a > b';
    } else if (a < b) {
        return 'b > a';
    } else if (a === b) {
        return 'a = b';
    }
}
let a = prompt ("enter the first number" , "10")
a = Number(a);
console.log(a);
while (isNaN(a) || a === 0 || a === null) {
    a = prompt ("Your number is incorect, please enter corect number" , "10");
    a = Number(a);
    } 
let b = prompt ("enter the second number" , "10")
b = Number(b);
console.log(b);
while (isNaN(b) || b === 0 || b === null) {
    a = prompt ("Your number is incorect, please enter corect number" , "10");
    a = Number(b);
    } 

maxNumber (a, b)
alert(maxNumber(a,b));