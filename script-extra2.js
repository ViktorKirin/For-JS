"use strict"

let firstNumber = prompt ("write any number", "1")
 if (isNaN(firstNumber) || firstNumber === null || firstNumber < 0 ) {
    firstNumber = prompt ("Your number is incorect, please enter corect number" , "1");
      km = Number(firstNumber);
    } 

function numberFactorial (firstNumber) {
    let result = 1;
    while(firstNumber){
        result = result * firstNumber--;
    }
    return result;
}

alert(numberFactorial(firstNumber));