'use strict'

// Задание №3 - добавить li № 0,2 и 4
let liFirst = document.querySelector('li');
let liThird = document.querySelector('#third');




let liNull = document.createElement('li');
let liSecond = document.createElement('li');
let liFours = document.createElement('li');

liFirst.before(liNull);
liNull.setAttribute("id", "null");
liNull.innerHTML = 0;

liFirst.after(liSecond);
liSecond.setAttribute("id", "second");
liSecond.innerHTML = 2;

liThird.after(liFours);
liFours.setAttribute("id", "fours");
liFours.innerHTML = 4;

console.log(document.body);

// console.log(document.querySelectorAll('[href*="ua"]'))


// Властивість previousElementSibling — сусіда зліва від елементу.

// Властивість nextElementSibling — сусіда з права від елементу.

// Властивість children — нащадки елементу.

// Властивість parentElement — батько елементу.

// Властивість firstElementChild — перший нащадок елементу.

// Властивість lastElementChild — останній нащадок елементу.


// Властивість innerHTML — задає або повертає вміст елемента.

// Властивість textContent — встановлює або повертає текстовий вміст вузла та його нащадків.

// Властивість outerHTML — повертає повний вміст вузла та його нащадків (HTML теги разом з текстом).