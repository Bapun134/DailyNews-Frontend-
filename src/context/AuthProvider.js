import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({ isAuthenticated: false, user: null });

  const authenticateUser = (user) => {
    setAuth({ isAuthenticated: true, user });
  };

  const deauthenticateUser  = () => {
    setAuth({ isAuthenticated: false, user: null });
  };

  return (
    <>

      <AuthContext.Provider value={{ auth, authenticateUser, deauthenticateUser }}>
        {children}
      </AuthContext.Provider>

    </>
  );
};

export default AuthProvider;


// What is AuthContext?
// AuthContext is a React Context object created using createContext(). 
//This context is created to hold authentication-related data and functions.
//This context will be used to share authentication-related data and functions across your React application 
//without passing props manually at every level.

// What is AuthProvider?
// AuthProvider is a component that uses the AuthContext.Provider to pass down the 
//auth state and authentication functions (login and logout) to any child components or nested components.

// Why do we export AuthProvider?
// We export AuthProvider so that it can be imported and used to wrap your application or parts of your application 
//where you need access to the authentication context.




