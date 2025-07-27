//Day 2 - Destructuring , rest , spread 

//Destructuring - Extract the values from arrays/objects into variables quickly in easy way

//Array Destructuring
let color = ["red" , "yellow" , "blue"];
const [first , second , third] = color
second

//Object Destructuring - Directly extract keys
let colors = {red : "#123" , blue : "#62542"}
const {red , blue} = colors
// fr = #123
red


//Rest and Spread 
//Spread - Used to copy, merge and expand values
const nums = [1,2,3]
const numsTotal = [...nums , 4, 5]


//Rest - Used to gather the rest values
const [ fir , ...all] = [1 , 2 , 3, 4]
all


//map, filter , reduce



//"Expense Tracker - Logic Only"

// 🟢 Features:
// Use map() to double test data
// Use filter() to remove expenses > ₹1000
// Use reduce() to calculate total


const testData = [12, 23 , 46]
//map - Transform each element
const doubleData = testData.map((data) => {return data*2})
//filter - Keeps items that matches the condition
const filterData = doubleData.filter((data) => data<1000)
//reduce - make the value to one
const reduce = filterData.reduce((acc , data) =>  acc + data , 0)
//flatMap - It allows you to map over an array and immediately flatten the result by one level — 
// especially useful when each element you're mapping returns an array.
