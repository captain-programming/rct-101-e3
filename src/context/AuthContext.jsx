import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, seIsAuth] = useState(false);

  const login=()=>{
    seIsAuth(true);
  };

  const logout=()=>{
    seIsAuth(false);
  };

  return <AuthContext.Provider value={{isAuth, login, logout}}>
    { children }
  </AuthContext.Provider>;
};
