"use strict"

// ask 1 mounth
let salaryFirstMounth = prompt("Enter first mounth salary", "1");
console.log(salaryFirstMounth);

if (salaryFirstMounth === null) {
    alert('You do not want to enter a salary? We will indicate 0');
    salaryFirstMounth = 0;
} else if (isNaN(salaryFirstMounth)) {
    alert('you have entered text, please enter a number. We will indicate 0' );
    salaryFirstMounth = 0;
}
console.log(salaryFirstMounth);

// ask 2 mounth
let salarySecondMounth = prompt("Enter second mounth salary", "2");
if (salarySecondMounth === null) {
    alert('You do not want to enter a salary? We will indicate 0');
    salarySecondMounth = 0;
} else if (isNaN(salarySecondMounth)) {
    alert('you have entered text, please enter a number. We will indicate 0' );
    salarySecondMounth = 0;
}
console.log(salarySecondMounth);

// show sum 1+2 mounth
let salarySum = Number(salaryFirstMounth)  + Number(salarySecondMounth) ;
alert('Your salary for 2 month is: ' + salarySum + '$');
console.log(salarySum);

// show sum + bonus
let salaryBonus = 1;
let totalSalary = salarySum + salaryBonus;
alert('Your have extra bonus! Your total salary was: ' + salarySum + '$' + ' It\'s increase for ' + salaryBonus + '$ and now it is: ' + totalSalary + '$');
console.log(totalSalary);

// if else show message
if (totalSalary < 2000) {
    alert('I am out');
} else if (totalSalary >= 2000) {
    alert('I am ready to work');
}


