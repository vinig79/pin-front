import React, { createContext,  useState } from 'react';


const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);


  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};




