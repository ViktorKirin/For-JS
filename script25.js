'use strict'


// Задание №1 создать объект и методом Object.defineProperty добавить свойства.
let user = {
    
}

Object.defineProperties(user, {
    'name': {
        value: 'name', 
        writable: false,
        // writable: true,
    },
    'age':{
        value: 'age', 
        writable: false,
    },
    'id': {
        value: 'id', 
        writable: false,
        configurable: false,
    }});


// Object.defineProperty(user, 'age', {
//     value: 'age', 
//     writable: false,
// });
// Object.defineProperty(user, 'id', {
//     value: 'id', 
//     writable: false,
//     configurable: false,
// });

//проверка
// user.name = 'newName';
// user.age = 'newAge';

console.log(user.age);
console.log(user.name);
console.log(user.id);

// Задание №2 создать 2 объекта, в dataBase - нельзя добавлять, в configurateDB - нельзя добавлять и удалять.

let dataBase = {
    dbName: 'user',
    dbType: 'MySql',
}

let configurateDB = {
    token: '123',
    password: '567',
    user: 'admin',
}

Object.freeze(dataBase);
//проверка
dataBase.dbName = 'newName';
delete dataBase.dbType;


Object.seal(configurateDB);
//проверка
configurateDB.token = 'newToken';
delete configurateDB.password;


console.log(dataBase);
console.log(configurateDB);


// Задание №3 Работа с свойством аксессором Setter

let salaries = {
    frontend: 2000,
    backend: 1500,
    design: 1000,
}
Object.defineProperty(salaries, 'sum', {
    
    get  (){
        let sum = 0;
        for(salary in this){
            sum += this[salary];
        }
        console.log(sum);
    },
    enumerable: false,
    
}),
Object.defineProperty(salaries, 'addSalaries', {
    set  (value){
         value.map((el) => {
             let newArrSalaries = el.split(': ');
             key = newArrSalaries [0];
             this[key] = +newArrSalaries [1];
    })
    },

    enumerable: false,
    
})

console.log(salaries)
salaries.sum
salaries.addSalaries =  ['frontend: 2500', 'backend: 1750', 'design: 1300', 'marager: 800'];
console.log(salaries)
salaries.sum


// Задание №4 Написать getter userInfo - которая будет возвращать все свлойства массива 

let userForExercise4 = {
    name: 'Mike',
    surname: 'Davis',
    age: 25,
}
Object.defineProperty(userForExercise4, 'userInfo', {
    get  () {
        let arrUserInfo = [];
        for (let key in userForExercise4) {
            // console.log(key);
            arrUserInfo.push(` ${key}: ${this[key]}`);
        }
        console.log(arrUserInfo.toString());
    },    
    enumerable: false,
})
userForExercise4.userInfo;
userForExercise4.login = 'MK_18';
userForExercise4.userInfo;
// console.log(userForExercise4)