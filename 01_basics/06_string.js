const name= "Nishant"
const repoCount= 15

console.log(name + repoCount + " this is outdated way of writing String in JS") // outdated way not preffered new way of concatinating is below

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('Nish-ns') // another way of declareing string
console.log(gameName[0]); // N
console.log(gameName[3]); // h
console.log(gameName.__proto__); // returns {} meaning object , __proto__ method is used to find prototype
console.log(gameName.length); // 6
console.log(gameName.toUpperCase()); // returns NISHNS , converted to uppercase but original string is not changed as it is stored in stack memory
console.log(gameName.charAt(5)); // s , character at 5 is 's'
console.log(gameName.indexOf('h')); // 3 ,index of 'h' is 3

const newString = gameName.substring(0,4) // Nish , ignores negative values and starts from 0
console.log(newString);

const anotherString = gameName.slice(-6,4) // ish , we can use -ve values here
console.log(anotherString);

const newStringOne = "    Nishant    "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes the useless space

const url = "https://nishant.com/nishant%20sharma"
console.log(url.replace('%20' , '-')); // replaces %20 with -

console.log(url.includes('nishant')); // true , this method checks for the word in your string

console.log(gameName.split('-')); // returns a array which is created by spliting the original string based on '-'
