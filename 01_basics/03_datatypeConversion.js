let score = null

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // score converted to number from string
console.log(valueInNumber) // gives NaN output , NaN => not a number

/*
NOTE : all the conversions we tried are listed below

"33" => 33
"33abc" => NaN
null => 0 
undefined => NaN
true => 1 ,false => 0

*/

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true

/*

1 => true
0 => false
"" => false
"Nish" => true

*/

let number = 33
let stringnumber = String(number)
console.log(typeof stringnumber); // string
console.log(stringnumber); // 33
