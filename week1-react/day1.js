//Day 1 - React basics

// let - It is block scoped and can't be declared again but can be updated 
let string = "Saloni"
string = "Umang"

//const - It is block scoped that can't be declared and updated
const number = 12


//Arrow functions - Functions that are concise and remove the use of 'this'. They dont have their own this and inherit it from surroundings
const addition = (int1 , int2) => {
    return int1 + int2
}

//Template Literal - It is easy and efficient way to declare strings using backticks

// 👉 Build: A simple Greeting Card Generator

// ✅ Features:
// Define user info with let and const
// Arrow function to generate greeting
// Template literal to format message
// Print result in console


const Greeting = (user , userInfo) => {
    const value = `Hi ${user} , please find this information: ${userInfo}`
    console.log(value)
}

