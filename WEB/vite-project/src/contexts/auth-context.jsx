/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  function onLogin (user) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  function onLogout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  const value = {
    user,
    onLogin,
    onLogout,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
  return useContext(AuthContext);
}