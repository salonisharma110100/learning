//Context API - Context API is used to avoid prop drilling. It allows us to create a global state that can be accessible by any nested component
                                        //Two main things
                    // createContext                            //useContext
import React , {useContext , createContext} from react;

const UserContext = createContext();


const App = () => {
    const userName = "Saloni Sharma"
    return(
       <UserContext.Provider value={userName} >
        <Profile />
       </UserContext.Provider>
    )
}

const Profile = () => {
    return(
        <>
        <h1>Hi this is the profile</h1>
        <Info />
        </>
    )
}

const Info = () => {
    const name = useContext(UserContext);
    return(
        <h1>This is {name}</h1>
    )
}