console.log('You can ignore single and double quotes like this: \\\'\\\'  \\\" \\\"');

// second exercise
// 1 step - inform
let alertEnterData = alert ('Please enter data')
// 2 step - ask name
let promptUserName = prompt("What's your name?");
// 3 step - show result
alert('Your name is: ' + promptUserName);
// 4 step - ask surname
let promptSurname = prompt("Enter your surname");
// 5 step - show result
alert('Your full name is : ' + promptUserName +" "+  promptSurname);
// 6 step - ask old
let promptOld = prompt("How old are you?");
// 7 step - show result
alert('Your full name is : ' + promptUserName +" "+  promptSurname + ", your age is: " + promptOld);
// 7 step - ask admin
let confirmAskAdmin = confirm("Are you admin?");
// 8 step - show result
alert('Your full name is : ' + promptUserName +" "+  promptSurname + ", your age is: " + promptOld + ', admin status: ' + confirmAskAdmin);