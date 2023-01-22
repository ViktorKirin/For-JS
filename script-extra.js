"use strict"

let firstNumber = prompt ("write first number", "1")
 if (isNaN(firstNumber) || firstNumber === null ) {
      km = prompt ("Your number is incorect, please enter corect number" , "1");
      km = Number(firstNumber);
     }
     
let secondNumber = prompt ("write second number", "1")
if (isNaN(secondNumber) || secondNumber === null ) {
    km = prompt ("Your number is incorect, please enter corect number" , "1");
    km = Number(secondNumber);
    } 
function anyNumber (a,b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return a*b;
        
    } else if (a % 2 != 0 && b % 2 != 0) {
        return a+b;
    }
    else if (a % 2 === 0 && b % 2 != 0 ) {
        return b;
    } 
    else if ( a % 2 != 0 && b % 2 === 0) {
        return a;
    }
}


alert(anyNumber(+firstNumber, +secondNumber))