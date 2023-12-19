import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({ children })=>{
  const [user, setUser] = useState({})

  const login = (user) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{user, login, logout}} >
      {children}
    </AuthContext.Provider>
  )
}
