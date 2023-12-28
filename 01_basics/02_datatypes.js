"use strict"; // use all JS code as newer version , also semicolons are not necessary in JS usually people avoid writing them 

// alert(3+3) //this works in .html file i.e browser but doesnot work in nodejs we have a different way of doing this in node

/* datatypes :-

    number => range is (2 power 53) Javascript numbers are always one type: double (64-bit floating point)
    use bigint after 2 power 53
    string => ""
    boolean => true/false
    null => standalone value (empty value)
    undefined => value not defined
    symbol => used for uniqueness


    object => this datatype contains 1. An object
                                     2. An array
                                     3. A date   
*/

let age= 18
let name= "Nishant"

// to check datattypes use typeof method
console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof null) // this gives object one of the problem of JS
console.log(typeof undefined) // undefined


/*
NOTE :
1. a JS variable can hold any type of data
2. when adding a number and a string JS treats the number as a string

*/

console.log(3 + "Nish") // gives output 3Nish (when adding a number and a string JS treats the number as a string)
console.log(3+3+"Hi") // JS evaluates expressions from left to right , output = 6Hi
console.log("hi"+3+3) // gives output hi33 , since the first one is string all are considered string by JS

