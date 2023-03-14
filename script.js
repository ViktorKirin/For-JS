'use strict'

// №1 


//обращаемся к 2 заголовкам на странице
let h1Data = document.querySelector('.allData')
let h1Admin = document.querySelector('.admin')
//адресс куда будем направлять запрос
let url = 'http://127.0.0.1:5500/json/home-work-data.json'

//создаем ассинхронную функцию
async function dataRequest (url) {
    try {
        let result = await fetch(url);

//получаем в response объект json
        let data = await result.json();
        console.log(data)

// создаем Div куда запишем результат - полученный json
        let allData = document.createElement('div')
        h1Data.after(allData);
// создаем Div куда запишем результат - полученный json, метод JSON.stringify - переводит объект - и записываем его строкой
        allData.innerHTML = JSON.stringify (data);
        return showAdminName (data)
    } catch (error) {
        console.log(error.message)
    }

}
dataRequest (url)
// создаем функцию для поиска объекта Admin
 
function showAdminName (data) {
    // console.log(data)
        for (const key in data) {
        if (data[key].isAdmin === true) {
            console.log(data[key].name)
            let admin = document.createElement('div')
            h1Admin.after(admin);
            admin.innerHTML = data[key].name
        } else {
            console.log('Никто не админ')
        }
    }
}

// Второй вариант

// fetch('http://127.0.0.1:5500/json/home-work-data.json')
//  .then(response => response.json())
//  .then(data => showAdminName (data))

// //  обращаемся к 2 заголовкам на странице
// let h1Admin = document.querySelector('.admin')

//  function showAdminName (data) {
//     console.log(data)
//             for (const key in data) {
//                 if (data[key].isAdmin === true) {
//                     console.log(data[key].name)
//                     let admin = document.createElement('div')
//                     h1Admin.after(admin);
//                     admin.innerHTML = data[key].name
//                 } else {
//                     console.log('Никто не админ')
//                 }
//             }
//         }



// №2 создать Proxy обертку вокруг функции getFullName(), при отсутсвии одного свойства возвращалось другое, при отсутсвии 2ух свойств - 'No name'

let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
let bob = {firstName: 'Bob'};
let mike = {lastName: 'Smith'};
let michael = {};

let getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`;
}
 getFullName = new Proxy(getFullName,{
     apply(_target, _thisArg, args) {

        for (key in args) {
        let value = args[key]
        //  console.log('value',value)

        if (Object.keys(value).length === 0) {
            return `No name`

        } else if (Object.keys(value).length === 2) {
            return `${value.firstName.toUpperCase()} ${value.lastName.toUpperCase()}`;

        } else if (Object.keys(value).length === 1) {

            if (value.firstName) {
                return `${value.firstName}`

            } else {
                return `${value.lastName}`
            }

        }
        
     }
    }
});

console.log(getFullName(nikola));
console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(michael));


