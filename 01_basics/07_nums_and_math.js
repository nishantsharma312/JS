const score = 300
console.log(score); // 300

const balance = new Number(400)
console.log(balance); // [Number:400]

console.log(balance.toString()); // converted to string now we can use string methods on it
console.log(balance.toFixed(2)); // 400.00 used in e commerce websites

const otherNumber = 23.8964
console.log(otherNumber.toPrecision(3)); // 23.9

const anyNumber = 1000000
console.log(anyNumber.toLocaleString(`en-IN`));

//------------------------------MATHS---------------------------------

console.log(Math); // Math is a object in JS
console.log(Math.abs(-5)); // 5 , convertes the -ve values to +ve
console.log(Math.round(4.5)); // 5 (round of value)
console.log(Math.ceil(4.2)); // 5 (always gives top value)
console.log(Math.floor(4.7)); // 4 (always gives bottom value)
console.log(Math.min(1,2,3,4,5,7)); // 1 , gives min value
console.log(Math.max(1,2,3,4,5,6)); // 6 , gives max value


console.log(Math.random()); // always gives a randam value from 0 to 1 , 0 included
console.log((Math.random()*10) + 1); // used to generate a random number , added 1 so we never get 0
console.log(Math.floor((Math.random()*10) + 1));

const min =10
const max =20

console.log(Math.floor((Math.random() * (max-min+1))+ min)); // to generate random numbers between min and max variables
// here (max-min) is the range 1 is added to avoid 0 and min is added to get value in range.

