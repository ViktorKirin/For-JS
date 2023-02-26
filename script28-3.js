'use strict'


// Задание №3
     function count(expression){
     try {
          if ( typeof(expression) === "number" ) {
          throw new Error ('Please write in string format')
               }
     } catch (error) {
               throw error
          }

          function getValues(expression){
          let values = [...expression]
              return values;
          }
    let values;
     try { 
          values = Values(expression)// line1
          throw new Error ('Values is not defined')
     } catch (error) {
          // console.log(error)
          if(error.message === 'Values is not defined') {
               throw error
          } else {
               values = [0, '+', 0];
          }
     }

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
}

   function showResult(value){
     return value
   }
  

  function sum(values) {
         return +values[0] + +values[2];
    }
    function subtract(values) {
         return +values[0] - +values[2];
    }
    function multiply(values) {
         return +values[0] * +values[2];
    } 
    function divide (value) {
         return values[0] / values[2];
    }

   
     try {
          // count('5*2')
 console.log(count('5*2')) //line2

     } catch (error) {
               console.log(error.name + ': ' + error.message);  
     }
     

 // console.log(count(5*2)) //line2
//     console.log(count('2/0'))
//     console.log(count('5-2'))
//     console.log(count('5+2'))
    // console.log(count('2/2'))








//     console.log(typeof(expression))
//     try {
//          if (typeof(expression) != string) {
//               console.log('блок тру отработал')
//          } else {
//               // throw new Error('введено без кавычек'); 
//               console.log('блок фалсе отработал')
//          }
//     } catch (Error) {
//          console.log('Please write in string format')
//     }




// function showMovie (user){
//          try{
//              unknownFunction();//Non-existent function called
//               if (user.age == undefined){
//                   throw new SyntaxError('Age not determined');
//               }
//               if(user.age >= 18){//undefined
//                   console.log('You can watch this movie');
//               } else {
//                   console.log('Sorry, you are too young');
//           }
//           } catch(error){
//               if(error.name == 'SyntaxError'){
//                   console.log(error);
//               } else {
//                   throw error
//               }
//           }
//      }
//      try{
//          showMovie(user)
//      } catch(error){
//       console.log(error);
//      }
// try {
//      if (typeof(expression) != string) {
//      // throw new SyntaxError ('Please write in string format')
//      }
// } catch (error) {
//      // console.log(error.message)
//      if (error.message === 'string is not defined') {
//           console.log ('Please write in string format')
//      }
//      // console.log(error)