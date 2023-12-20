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

/************************************* Operations ************************************/

let value = 3
let negValue = -(value)
console.log(negValue); // -3

// console.log(2**4) // 2 to power 4
// console.log(31%3) // remainder when 31 is divided by 3

let str1 ="Nishant"
let str2 =" Sharma"

console.log(str1 + str2)

// console.log(+true); // 1 ,tricky conversion not preffered
// console.log(+""); // 0 ,tricky conversion not preffered

// let a = 3,b =a++
// console.log(b); // returns 3 , returns value before incrementing

let a =3,b =++a
console.log(b); // returns 4 , returns value after incrementing

/*

a++ => (postfix) increment operator increments and returns the value before incrementing
++a => (prefix) increment operator increments and returns the value after incrementing

*/
