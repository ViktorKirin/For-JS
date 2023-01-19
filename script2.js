"use strict"

let word =  prompt ("enter the CSS value of the Display property" , "");
console.log(typeof(word));
console.log(Number(word));
if (isNaN(word)) {
    switch (word) {
        case 'block':
            alert ("Set 'display: block'")
            break;
        case 'flex':
            alert ("Set 'display: flex'")    
            break;
        case 'grid':
            alert ("Set 'display: grid'")
            break;
        case 'inline':
            alert ("Set 'display: inline'")
            break;
        case 'none':
            alert ("Set 'display: none'")
            break;
        default:
            alert ("Set 'display: inline-block;'")
            break;
    }
} else {
    alert ("do not rush =)")
}



