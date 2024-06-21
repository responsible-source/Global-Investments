import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext({})

export const AuthProvider = ({ children }) =>{
    const {token, setToken} = useState({})
    return(
        <div>
            <AuthContext.Provider value={{token, setToken}}>
                { children  }
            </AuthContext.Provider>
        </div>
    )
}