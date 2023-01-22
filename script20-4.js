"use strict"

function KmToM(km)  {
    return (km * 1000);
}

function KmToCm(km) {
    return (km * 100000);
}

function gerMetric (metric, km, m, cm) {
    if (metric === 'm') {
        return m(km);
    }
    else if (metric === 'cm') {
        return cm(km);
    }
}

let metric = prompt ("write metric m or cm ", "m") ; 
console.log(metric)
if (isNaN(metric) || metric === null ) {
   } else{ 
    metric = prompt ("Your metric is incorect, write metric m or cm" , "m");
   }

let km = prompt ("write the number of kilometers", "1")
 if (isNaN(km) || km === null || km < 0 ) {
      km = prompt ("Your number is incorect, please enter corect number" , "1");
      km = Number(km);
     } 

// gerMetric (metric, km, m, cm);
alert(gerMetric(metric, km, KmToM , KmToCm ))
