const marvelHeros = ["thor","ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros); // gives nested array
// console.log(marvelHeros[3]); // ["superman","flash","batman"]
// console.log(marvelHeros[3][1]); // flash

// const allHeros = marvelHeros.concat(dcHeros) // concat method properly adds both arrays
// console.log(allHeros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spread method to concat 2 arrays :-

const allHeros2 = [...marvelHeros, ...dcHeros] // spread 2 arrays , preffered way of concatinating
console.log(allHeros2); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usableAnotherArray = anotherArray.flat(2) // 2 is depth of array here , can also give infinity if dont know the depth
console.log(usableAnotherArray); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Nishant")); // false
console.log(Array.from("Nishant")); // converts the given string to array
console.log(Array.from({name: "Nishant"})); // [] , returns empty array

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3)); // [100,200,300]
