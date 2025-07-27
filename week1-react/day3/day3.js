// Promise - A promise is an object representing eventual completion or failure of an asynchronous operation

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task Done!!")
    }, 1000)
})

//resolve - if operation succeed
//reject - if operation fails
//then - handles success
//catch - handles errors
//finally - executes irrespective of the result


// Async / await - Cleaner syntax for handling Promises

const fetchData = async() => {
    try{
    const response = await fetch("https://api.com");
    const data = await response.json();
    console.log(data);
    }
    catch(error){
    console.log("Error.." , error)
    }

}

// Why do we use response.json() in normal fetch

// const response = await fetch("https://api.com"); This returns a Promise that contains metadata as well as body
// const data = await response.json();  Read the body of the response and convert it into actual JavaScript data (usually an object or array)
