     

let a = 'email@gma@i@l.com'
console.log(a.split(''))

if (a.split('').includes('@') > 1) {
    console.log('mit@@')
} else if (a.split('').includes('@') > 2)
console.log('mit@')
// if(a.split('.').includes('@@')) {
//     console.log(!a.split('').includes('@@'))
// } else {
//     console.log('ohne @',a)
// }
// console.log(a.split(''))