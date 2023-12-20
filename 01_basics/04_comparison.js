// console.log("2" == 2); // true, JS converted "2" to number
// console.log("2" < 1); // false, JS auto converts "2" to number

// console.log(null == 0); // false
// console.log(null > 0); // false
// console.log(null >= 0); // true 

/*
NOTE :
in JS equality (==) and comparisons (< > <= >=) are treated differently , comparisons convert null to a number treating it as 0
thats why null > 0 is false as it is treated as 0 > 0
and null >= 0 is true as it is treated as 0 >= 0

null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:
null == null; // true
null == undefined; // true
Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero

*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined >= 0); //false

// === is strictly check , it also check datatype of the value

console.log("2" === 2); // false

