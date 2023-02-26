'use strict'

// № 4 получить информацию с сервера и записать в блоки user-a, user-ab

let userA = document.querySelector('.user-a')
let userAB = document.querySelector('.user-ab')

let btnFilterA = document.querySelector('.add-a')
let btnFilterAB = document.querySelector('.add-ab')
let btnFilterALL = document.querySelector('.add-all')

btnFilterALL.addEventListener('click',  All)

function All (some) {
    userA.innerHTML = ' ';
    userAB.innerHTML = ' ';
    async function getData (url) {
        try{
            let result = await fetch(url);
                if(result.ok) {
                    let response = await result.json();
                    response.map((function (el) {
                           if(el.title.slice(0,1) === 'a') {
                            let newUserA = document.createElement('div')
                            userA.prepend(newUserA);
                            newUserA.innerHTML = JSON.stringify(el)
                           } 
                        }))     
                    response.map((function (el) {
                        if (el.title.slice(0,2) === 'ab') {
                            let newUserAB = document.createElement('div')
                            userAB.prepend(newUserAB);
                            newUserAB.innerHTML = JSON.stringify(el)
                           }
                        }))
            
                } else {
                    throw new Error (`Error: ${response.status}`)
                }
    
    
        } catch (error) {
           console.log(error.message)
        }

        // btnFilterALL.removeEventListener('click', All);

    }
    getData ('https://jsonplaceholder.typicode.com/todos/')
}

btnFilterA.addEventListener('click',  onlyA)

function onlyA (some) {
    userA.innerHTML = ' ';
    userAB.innerHTML = ' ';
    async function getData (url) {
        try{
            let result = await fetch(url);
                if(result.ok) {
                    let response = await result.json();
                    response.map((function (el) {
                           if(el.title.slice(0,1) === 'a') {
                            let newUserA = document.createElement('div')
                            userA.prepend(newUserA);
                            newUserA.innerHTML = JSON.stringify(el)
                           } 
                        }))     
            
                } else {
                    throw new Error (`Error: ${response.status}`)
                }
    
    
        } catch (error) {
           console.log(error.message)
        }
        // btnFilterA.removeEventListener('click', onlyA);
    }
    getData ('https://jsonplaceholder.typicode.com/todos/')
}


btnFilterAB.addEventListener('click',  onlyAB)

function onlyAB (some) {
    userA.innerHTML = ' ';
    userAB.innerHTML = ' ';
    async function getData (url) {
        try{
            let result = await fetch(url);
                if(result.ok) {
                    let response = await result.json();  
                    response.map((function (el) {
                        if (el.title.slice(0,2) === 'ab') {
                            let newUserAB = document.createElement('div')
                            userAB.prepend(newUserAB);
                            newUserAB.innerHTML = JSON.stringify(el)
                           }
                        }))
            
                } else {
                    throw new Error (`Error: ${response.status}`)
                }
    
    
        } catch (error) {
           console.log(error.message)
        }

        // btnFilterAB.removeEventListener('click', onlyAB);

    }
    getData ('https://jsonplaceholder.typicode.com/todos/')
}



