"use strict"


function KmToM(km)  {
    
}

function KmToCm(km) {

}

function gerMetric (metric, km, m, cm) {
    km = 
}

let metric = prompt ("write metric m or cm ", "m") ; 
console.log(metric)
if (isNaN(metric) || metric === null ) {
   } else{ 
    metric = prompt ("Your metric is incorect, write metric m or cm" , "m");
   }

let km = prompt ("write the number of kilometers", "1")
 if (isNaN(km) || km === null ) {
      km = prompt ("Your number is incorect, please enter corect number" , "1");
      km = Number(km);
     } 


gerMetric (metric, km, m, cm);
alert(gerMetric(metric, km))

// function calculator (anyNumber, count) {
//  return anyNumber + 3 * count;
// }

// let anyNumber = prompt ("enter the number","1")
// console.log(anyNumber);
// while (isNaN(anyNumber) || anyNumber === null ) {
//      anyNumber = prompt ("Your number is incorect, please enter corect number" , "1");
//      anyNumber = Number(anyNumber);
//     } 

//     let count = prompt ("write the number of operations +3","1")
// console.log(count);
// while (isNaN(count) || anyNumber === null) {
//      count = prompt ("Your number is incorect, please enter corect number" , "1");
//      count = Number(count);
//     } 

// calculator (anyNumber, count);
// // alert(calculator(anyNumber, count))
// alert(calculator(+anyNumber, +count))
// let word =  prompt ("enter the CSS value of the Display property" , "");
// console.log(typeof(word));
// console.log(Number(word));
// if (isNaN(word)) {
//     switch (word) {
//         case 'block':
//             alert ("Set 'display: block'")
//             break;
//         case 'flex':
//             alert ("Set 'display: flex'")    
//             break;
//         case 'grid':
//             alert ("Set 'display: grid'")
//             break;
//         case 'inline':
//             alert ("Set 'display: inline'")
//             break;
//         case 'none':
//             alert ("Set 'display: none'")
//             break;
//         default:
//             alert ("Set 'display: inline-block;'")
//             break;
//     }
// } else {
//     alert ("do not rush =)")
// }
