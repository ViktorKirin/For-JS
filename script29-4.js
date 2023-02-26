'use strict'

// Задание №4 - добавить a , h1 - поместить внутрь тега а
let main = document.querySelector('h1');


let link = document.createElement('a');

document.body.prepend(link)
link.innerHTML = '<h2></h2>'
let element = document.querySelector('h2');
element.replaceWith(main)
element.remove() ;


link.setAttribute("id", "link");
link.setAttribute("href", "https://dom.spec.whatwg.org/");

console.log(document.body);
