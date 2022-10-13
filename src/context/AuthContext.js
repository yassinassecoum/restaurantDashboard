import { createContext, useEffect, useState, useContext } from "react";

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    //signUp Method
  }
  function signIn(email, password) {
    //signIn Method
  }
  function logOut() {
    //logout Method
  }
  return (
    <authContext.Provider value={{ user, signUp, signIn, logOut }}>
      {children}
    </authContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(authContext);
}
