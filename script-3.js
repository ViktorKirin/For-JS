'use strict'

// Задание №3 

let list = document.querySelector('.shop-list');
let brands = list.querySelectorAll('li');
// console.log(brands);
let goods =[] ;

for (let index = 0; index < brands.length; index++) {
    let element = brands[index].innerHTML;
    // console.log(element)
    goods.push(element)
}
console.log(goods)

// console.log(goods[0].innerHTML)


 let uniqueGoods = new Set(goods)
 list.innerHTML = ' ' ;

  for (let item of uniqueGoods){
       let li = document.createElement('li');
       li.innerHTML = item;
       list.append(li);
      }

