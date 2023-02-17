'use strict'


// Задание №1 и №2
function count(expression){
    function getValues(expression){
    let values = [...expression]
        return values;
    }
   let values = getValues(expression);
   switch (values[1]) {
   case '+': 
        return showResult(sum(values));
   case '-':
        return showResult(subtract(values));
   case '*':
        return showResult(multiply(values));
   case '/':
        return showResult(divide(values))
   }
   function showResult(value){
        return value
   }
  }
  function sum(values) {
         return +values[0] + +values[2];
    }
    function subtract(values) {
         return values[0] - values[2];
    }
    function multiply(values) {
         return values[0] * values[2];
    }
    function divide(values) {
        try {
            if(+values[2] === 0) {
                throw new Error('Cant\'t divide by 0'); 
            } else {
                return values[0] / values[2];
            }
        } catch (error) {
             console.log(`${error.name}: Cant\'t divide by 0`);
             return 0;
        }
         
    }
    
    // count('5-2')
    // console.log(count('5-2'))
    console.log(count('5+2'))
    // console.log(count('2/2'))
    // console.log(count('2*2'))
    console.log(count('2/0'))

// Задание №3 - в отдельном файле js

// Задание №4 - в отдельном файле js

