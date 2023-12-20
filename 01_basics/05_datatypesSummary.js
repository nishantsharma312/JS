/*
datatypes are of 2 types primitive and non-primitive(reference type)
1. primitive :
    String
    Number
    Boolean
    null
    undefined
    Symbol ,eg : const id= Symbol('123')
                 const anotherId= Symbol('123')
                 console.log(id === anotherId) // returns false
    BigInt ,eg : const bigNumber= 3425243634634n

2. reference type/ non-primitive :
    Array
    Objects
    Functions

*/

// JS is dynamically typed language this means that variable types are determined at runtime and u dont need to declare the type
// also u can assign different types to a variable in its lifetime

// array
 let rollNo = [1,2,3];
 let name = ["Ram","Shyam","Nishant"];

// object

 let obj = {
    name: "Nishant",
    age: 22,
 }

// function

const myFunc = function(){
    console.log("Oh SNAP!");
}

// use typeof function to check type of a variable

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
    ** null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
    ** Arrays  =>  object
       Function  =>  function (function object/object function)
       Object  =>  object
*/


// -----------------------------------Stack and Heap memories---------------------------------------

/* 
Stack(used in primitive datatypes) , Heap(used in non-primitive datatypes)

Primitive dataType goes in stack memory; And it provides copy of that element.
So when we change something (through assigned variable) it gets changed in copy of element  not in original.

Opposite of this. Non primitive dataType get stored in HEAP memory. 
And it gives reference to the value of assigned elements.
So when assigned variable makes changes it changes the both values(original and assigned one

So we can say that stack memory is call by value while Heap memory is call by reference.

Link to yt video : https://www.youtube.com/watch?v=7gwc-1czolw&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=10

*/

