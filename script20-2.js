"use strict"
function revers(anyNumber) {
    // anyNumber = (-1) * anyNumber;
    return -anyNumber;
}
let anyNumber = prompt ("enter the number","1")
anyNumber = Number(anyNumber);
console.log(anyNumber);
while (isNaN(anyNumber) || anyNumber === null) {
    anyNumber = prompt ("Your number is incorect, please enter corect number" , "1");
    anyNumber = Number(anyNumber);
    } 
revers(anyNumber);
alert(revers(anyNumber));