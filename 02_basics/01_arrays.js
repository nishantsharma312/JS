// arrays declaration :-

const myArr = [0,1,2,3,4,5]
// console.log(myArr[3]); // 3

// const myHeros = ["Spiderman", "antman", "thor", "rocket racoon"]

// const myArr2 = new Array(1,2,3,5,7,9)

// // array methods :-

// myArr.push(8) // push method adds a value in the array
// console.log(myArr); // 8 added in myArr

// myArr.push(19) // adds 19
// console.log(myArr);
// myArr.pop() // removes the last element from the array
// console.log(myArr); // 19 removed

// // myArr.unshift(9) // unshifts method adds the value in start of the array i.e first element
// console.log(myArr); // but this moves the index of each element of the array by 1

// myArr.shift() // removes the first element of the array and changes the length of an array
// console.log(myArr); // removes 9

// console.log(myArr.includes(9)); // false , checks for the given value if it exists in the array
// console.log(myArr.indexOf(9)); // -1 , gives -1 because the value doesnot exist in the given array
// console.log(myArr.indexOf(8)); // 5 , gives the index of value 8 

// const newArr = myArr.join() // adds all elements of an array into a string

// console.log(myArr); 
// console.log(newArr);
// console.log(typeof(newArr)); // type of newArr is string

// slice , splice :-

console.log("A", myArr);

const mysA1 = myArr.slice(1,3) // slice method returns a copy of a section of a array (1=start ,3=end are spicified indexes) in this eg
// (1,2 is included in slice but not 3 i.e end)

console.log(mysA1); // [1,2] , gives a array sliced from index 1 to 3 (3 not included)
console.log("B",myArr);

const mysA2 = myArr.splice(1,3) // changes the original array and cuts the range from the array i.e everything in the original 
                                // array from start to end point (including end point) gets removed to the new array 
console.log("C",myArr); // [0,4,5]
console.log(mysA2); // [1,2,3]

