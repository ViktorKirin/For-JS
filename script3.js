"use strict"
let anyNumber = prompt ("Enter any positive number" , "100");
let summ;
anyNumber = Number(anyNumber);
console.log (anyNumber);
while (isNaN(anyNumber) || anyNumber === 0) {
    anyNumber = prompt ("Your number is incorect, please enter corect number" , "100");
    anyNumber = Number(anyNumber);
    } 
    if (anyNumber > 0) {
        summ = anyNumber * 12;
        alert (anyNumber + " by 12 equals " + summ);
    }


//  if  (isNaN(anyNumber)) {
//     alert ('Your number is incorect, please enter corect number');
// } 
// else if (anyNumber > 0) {
//     summ = anyNumber * 12;
//     alert (anyNumber + " by 12 equals " + summ);
// }
// console.log (anyNumber);   
