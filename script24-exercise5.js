
// //Задание №5


class User{
    #phone;
    constructor(name, phone){
    this.#phone = phone;
    this.name = name;
}
getPhone (isAdmin) {
    if (isAdmin) {
        return this.#phone;
    } else {
        let telNumber;
        telNumber = this.#phone.split('-');
        telNumber.splice(1, 2, "******");
        // console.log(telNumber);
         return telNumber.join("-") ;
    }
}
}

let user1 = new User('Mike', '068-888-88-99');
let user2 = new User('Tom', '066-888-88-99');

console.log(user1.getPhone(false)) //'068-******-99'
console.log(user2.getPhone(false)) //'066-******-99'
console.log(user1.getPhone(true)) //'068-888-88-99'
console.log(user2.getPhone(true)) //'066-888-88-99'