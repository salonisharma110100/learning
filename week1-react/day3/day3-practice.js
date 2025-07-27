//Mini Exercise 1: Create a basic promise

const isEven  = async(num) => {
    return new Promise((resolve, reject)=> {
        if(num% 2 == 0){
            resolve("Success")
        }
        else{
            reject("Fail")
        }
    })
}

  isEven(12).then((msg) => console.log(msg)).catch((error) => console.log(error))


//Write a promise that resolves or rejects based on some math condition

const isGreaterThan = async(num) => {
    return new Promise((resolve , reject) => {
        if(num > 10) {
            resolve("Number is greater than 10")
        }
        else{
            reject("number is less than 10")
        }
    })
}

isGreaterThan(15).then((message) => console.log(message)).catch((error) => console.log(error))

// Fetch data using fetch() from a dummy API (jsonplaceholder.typicode.com)
const fetchData = async() => {
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("Data" , data);
    }
    catch(error){
        console.log("Error!!" , error)
    }
}

// Handle it using both .then() and async/await
const fetchdata = async() => {
       fetch ("https://jsonplaceholder.typicode.com/posts").
        then((response) => response.json()).
        then((data) => console.log("Data.." , data)).
        catch((error) => console.log(error))
}

fetchdata()
fetchData()
