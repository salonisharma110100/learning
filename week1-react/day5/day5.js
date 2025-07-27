//useState - It is React hook that allows us to add state to functional component. It has initial value and the function to update the state

import React, {useState} from "react";

const App  = () => {
    const [count , setCount] = useState(0);

    const handleCount = () => {
        setCount(count++);
    }

    return(
        <>
        <h1>The count of {count}</h1>
        <button onClick={handleCount}>Click ME!!!</button>
        </>
    )
}


//Prop Dilling - Prop dilling basically means passing the data from Parent to child and then child to child's 
//Create 3 components – App, Profile, and Info. Pass a user's name from App to Info.


const Apps = () =>{
const userName = "Saloni Sharma";
return(
    <Profile name = {userName} />
)
}

const Profile = ({name}) => {
    return(
        <>
        <h1> Hi , this is a Profile of {name}</h1>
        <Info name = {name} />
        </>
    )

}

const Info = ({name}) => {
    return(
        <h1> Please find the follwoing information about {name}</h1>
    )

}

export default Apps;