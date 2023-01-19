"use strict"

let ageHuman = prompt ("What your age?" , "18");
ageHuman = Number(ageHuman);
console.log(ageHuman);

if (ageHuman <= 17) {
   confirm('Do you stady at school?');
} else if (17 < ageHuman && ageHuman < 25) {
   confirm('Do you stady at university?');
} else if (25 <= ageHuman && ageHuman < 60) {
   confirm("Do you have a Job?" );
} else {
   confirm('What are you doing?');
}