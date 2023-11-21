// AuthContext.js

import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [logado, setLogado] = useState(localStorage.getItem("logado"));

  const login = ( user ) => {
    setUser(user)
    setLogado(true)
    console.log(user)
    localStorage.setItem("userEmail", user.email)
    localStorage.setItem("userName", user.name)
    localStorage.setItem("logado", true)
  };

  const logout = () => {
    setUser(undefined)
    setLogado(false)
    localStorage.setItem("userEmail", "")
    localStorage.setItem("userName", "")
    localStorage.setItem("logado", false)
  };

  return (
    <AuthContext.Provider value={{ user ,logado , login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
