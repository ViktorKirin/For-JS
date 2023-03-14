'use strict'

// №3 В существующем массиве 1) добавить в хранилище localtorage 2) написать функцию sayHelloToUser(id)

let users = [
    {name: 'Nikola', age:18, id:1},
    {name: 'Bob', age:25, id:2},
    {name: 'Mike', age:32, id:3},
];
// localStorage.clear();
localStorage.setItem('users', JSON.stringify(users))

    function sayHelloToUser(id) {
    let allUsers = localStorage.getItem('users')
    allUsers = JSON.parse(allUsers)
    // console.log(allUsers)

        for(let i = 0; i < allUsers.length; i++) {
         if(allUsers[i].id == id) {
            console.log(`Hello: ${allUsers[i].name}`) ;
            }
        }

        // let user = allUsers.find(user =>  user.id === id)
        // console.log(`Hello: ${user.name}`);
    }

sayHelloToUser(3); // Hello: Mike


//https://ru.stackoverflow.com/questions/692025/%D0%9D%D0%B0%D0%B9%D1%82%D0%B8-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D0%B2-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2

// №4 Задание с Input . При открытии страницы input содержал старый текст с прошлого раза

let entryField = document.querySelector('[type="text"]')

//получаем текст
entryField.addEventListener('input', function () {
    console.log(entryField.value)
    localStorage.setItem("oldTexFromInput", entryField.value)
})
    
//восстонавливаем текст

window.addEventListener('showOldText', function () {
    entryField.value = localStorage.getItem("oldTexFromInput")
  });

// помощь для решения -сохранил для себя)

//https://www.youtube.com/watch?v=R2Vrz4Otomo&t=565s&ab_channel=WebDev%D1%81%D0%BD%D1%83%D0%BB%D1%8F.%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%9B%D1%83%D1%89%D0%B5%D0%BD%D0%BA%D0%BE

// https://ru.stackoverflow.com/questions/816507/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-input-%D0%B2-localstorage

//https://www.youtube.com/watch?v=H3Z-aD1BOhY&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9
