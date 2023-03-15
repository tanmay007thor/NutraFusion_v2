import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({ accessToken: '', user: null });

  const updateAuthData = (accessToken, user) => {
    setAuthData({ accessToken, user });
  };

  return (
    <AuthContext.Provider value={{ authData, updateAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
