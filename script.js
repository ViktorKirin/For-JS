'use strict'

// № 1 написать функцию getData

function getData (url) {
    let result = fetch(url);
    result.then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error (`ошибка ${response.status}`)
        }
    })
    .then((data) => {
         data.map((function (el) {
            if(el.title.slice(0,1) === 'a') {
             console.log('Data: ', el)
            }
         }))     
})
    result.catch(error => {console.log(error.message)})
}

getData ('https://jsonplaceholder.typicode.com/todos/')


 //пример

// function getData (url){
//         let result = fetch(url);      
//         result.then(response => 
//             {
//                 if(response.ok){
//                 	return response.json();
//                 }
//                throw new Error(`Error: ${response.status}`);
//             })
//         .then(data => console.log('Data: ', data))
//         .catch(error => console.log(error.message))
//     }
    
//     getData('https://jsonplaceholder.typicode.com/todos');
    