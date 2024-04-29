import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext({})

export const AuthProvider = ({ children }) =>{
    const {auth, Setauth} = useState({})
    return(
        <div>
            <AuthContext.Provider value={{auth, Setauth}}>
                { children  }
            </AuthContext.Provider>
        </div>
    )
}