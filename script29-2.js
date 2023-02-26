'use strict'

// Задание №2 - найти все site.ua/ua

let serchLinks = document.body.querySelectorAll('[href*="site.ua/ua/"]');

console.log(serchLinks);

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