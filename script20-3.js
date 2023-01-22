"use strict"
function calculator (anyNumber, count) {
 return anyNumber + 3 * count;
}

let anyNumber = prompt ("enter the number","1")
console.log(anyNumber);
while (isNaN(anyNumber) || anyNumber === null ) {
     anyNumber = prompt ("Your number is incorect, please enter corect number" , "1");
     anyNumber = Number(anyNumber);
    } 

    let count = prompt ("write the number of operations +3","1")
console.log(count);
while (isNaN(count) || anyNumber === null) {
     count = prompt ("Your number is incorect, please enter corect number" , "1");
     count = Number(count);
    } 

calculator (anyNumber, count);
// alert(calculator(anyNumber, count))
alert(calculator(+anyNumber, +count))