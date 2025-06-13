"use strict"; // Treat all JS CODE as newer version

// alert(3 + 3) // we are using node js not js

 let name = "Amit"
 let age = 35
 let isLoggedIn = false

 // number => 2 to the power 53
 // bigInt
 // string => ""
 // boolean => true/flase
 // null => standalone value
 // undefined => 
// symbol => unique
  
 // object

// console.log(typeof "Amit");
// console.log(typeof age);
// console.log(typeof null);
// console.log(typeof undefined);

//Primitive Datatypes (call by value 7 Types: String, Number, BigInt, Boolean, Undefined, Null, Symbol)
let score = 33
let scoreDecimal = 33.5
let bigScore = 156464566666666664554544444n

// console.log(typeof bigScore)

//Non-Primitive Datatypes (call by reference Types: Array, Object, Function)
let heros = ['Shaktiman', 'Aryaman', 'Nagraj']
let details = {
    name : 'Amit Kumar',
    age : 35,
    city : 'New Delhi'
}

let myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof myFunction)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack Memory(Premitive Datattypes)  and Heap Memory(Non-Premitive Datattypes)

let myYoutubeName = 'ramkrishna'
let newYoutubeName = myYoutubeName
newYoutubeName = 'Jaishrikrishna'

// console.log(newYoutubeName)
// console.log(myYoutubeName)

let userOne = {
    name : 'Amit Kumar',
    email : 'sharma@gmail.com'
}

let userTwo = userOne

userTwo.email = 'amit@gmail.com'

console.log(userOne.email)
console.log(userTwo.email)
