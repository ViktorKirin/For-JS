'use strict'


// Задание №4

function MakeUsers(name, age){
     this.name = name;
     this.age = age;
}
     let user = new MakeUsers('Mike');//Forgot to pass the second parameter
     
function showMovie (user){

     try {
          if (user.age == undefined) { 
               throw new Error('Forgot to pass Age')
          }
          if(user.age >= 18){//undefined
               console.log('You can watch this movie');
          } else {
                console.log('Sorry, you are too young');
          }
         } catch (error) {
          user.age = prompt ('Enter your age', '18');
          return showMovie (user);
     }
}
showMovie(user);
         
// function MakeUsers(name, age){
//      this.name = name;
//      this.age = age;
// }
//      let user = new MakeUsers('Mike');//Forgot to pass the second parameter
// try {
//      if (age == undefined) { 
          
//      }
//     } catch (error) {
//      user.age = prompt ('Enter your age', '18');
// }

// function showMovie (user){
//     if(user.age >= 18){//undefined
//         console.log('You can watch this movie');
//     } else {
//          console.log('Sorry, you are too young');
//     }
// }
// showMovie(user);