let myDate = new Date()
console.log(myDate); // gives date and time in weard format
console.log(myDate.toString()); // gives date and time in readable format
console.log(myDate.toDateString()); // removes the date and timezone from output
console.log(myDate.toLocaleDateString()); // gives date 23/12/2023 in local format
console.log(myDate.toLocaleString()); // gives date and time in local format
console.log(myDate.toLocaleTimeString()); // gives only date in local format
console.log(myDate.toTimeString()); // gives time in local format
console.log(typeof myDate); // object

// let newDate = new Date(2023,0,3) // months start from 0
// console.log(newDate.toDateString()); // gives the newDate (Tue Jan 03 2023)
let newDate = new Date(2023,0,3,5,3,45)
console.log(newDate.toLocaleString()); // gives time as well (3/1/2023, 5:03:45 am)

let cretedDate = new Date(`2024-01-03`)
console.log(cretedDate.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(cretedDate.getTime()); // gives date in milli secound

console.log(Math.round(Date.now()/1000)); // converting date from mSec to Sec and rounding off so we dont get date in decimals


