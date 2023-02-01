"use strict"


//Задание №1 Создание класса User , создать 2 объекта и вывести часть данных объектов в консоль.

class User{
    #name;
    constructor(name, login, age){
    this.#name = name;
    this.login = login;
    this.age = age;
}
getName (isAdmin) {

    if (isAdmin) {
        // if (this.#name) {
        //     return this.#name
        // } else {
        //     return 'нет имени'
        // }
        return this.#name ? this.#name : `the user did not specify a name, but his login: ${this.login}`;
    } else {
        return 'access denied'
    }
}

changeName (UserName, UserPassword) {
    if (UserPassword === '123') {
        this.#name = UserName;
        return `Name change from Mike to ${UserName}`;
    } else {
        return 'Permission denied';
    }
}

}
let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User('', 'NRG', 22);

// console.log(user1.login);
// console.log(user1.age);
// console.log(user2.login);
// console.log(user2.age);

//Задание №2 Создал в классе User метод getName() в класс User в задании №1.

console.log(user1.getName(false));// access denied
console.log(user1.getName(true));// 
console.log(user2.getName(false));// access denied
console.log(user2.getName(true));//

//Задание №3 Создал в классе User метод changeName() в класс User в задании №1.

console.log(user1.changeName('Bill', '123'));// Name change from Mike to Bill
console.log(user1.changeName('Bill', '222'));// Permission denied


// //Задание №4 Создал класс Admin и метод getUserName() - попытался, ноне понял что нужно было сделать.. :)
// class Admin extends User {
//     #isAdmin;
//     constructor(name, login, age) {
//         super (name, login, age);
//         this.#isAdmin = true;
//     }

//     getUserName (user) {
//         if (user === user1) {
//             return `Имя ${user1.this.name}`;

//         }
//         if (user === user2) { 
//             return `Имя ${user2.this.name}`;
//         }
//     }

// }

// console.log(Admin.getUserName(user1));//Mike
