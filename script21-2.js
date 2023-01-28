"use strict"

let salaries = {
    frontend: 12000,
    backend: 10000,
    desinger: 8000,
    dayPay () {
        alert('We must pay salary on Tuesday');
    },
    total () {
        let sum = 0;
        for (let key in salaries) {
            if (!isNaN(salaries[key])) {
                sum += salaries[key];
            }
        }
        return console.log(sum);
    }
}
salaries.total();
salaries.manager = 5000;
salaries.total();



        // let sum = this.frontend + this.backend + this.desinger;
        // console.log(sum);