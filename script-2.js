'use strict'

// № 2 написать функцию getData используя 

async function getData (url) {
    try{
        let result = await fetch(url);
            if(result.ok) {
                let response = await result.json();
                response.map((function (el) {
                       if(el.title.slice(0,1) === 'a') {
                        console.log('Data: ', el)
                       }
                    }))     
        
            } else {
                throw new Error (`Error: ${response.status}`)
            }


    } catch (error) {
       console.log(error.message)
    }

}

getData ('https://jsonplaceholder.typicode.com/todos/')
