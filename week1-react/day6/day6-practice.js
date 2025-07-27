import React , {createContext , useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
   const [userName , setUserName] = useState();
   const [theme , setTheme] = useState("dark");

   return(
    <UserContext.Provider value={{userName , setUserName , theme, setTheme}}>
        {children}
    </UserContext.Provider>
   )
}