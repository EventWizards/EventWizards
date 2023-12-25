import { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));
  // const [isRegistered, setIsRegistered] = useState(!!Cookies.get("token"));
  // const [headers, setHeaders] = useState([]);
  const [authToken, setAuthToken] = useState(Cookies.get("token") || null);
  const [userRole, setUserRole] = useState(undefined);

  const login = (token) => {
    setAuthToken(token);
    Cookies.set("token", token)
    setUserRole(2)
    // window.location.href = "/";
  };

  
  const register = (token) => {
    setAuthToken(token);
    Cookies.set("token", token)
    setUserRole(2)
    window.location.href = "/";
console.log("asdasdasdasd",userRole);
  };
  

  const logout = () => {
    setAuthToken(null);
    console.log(authToken);
    Cookies.remove("token");
    Cookies.remove("role");
    sessionStorage.removeItem("role");
    window.location.href = "/";
    };

  const isAuthenticated = () => {
    return !!authToken;

  }

  const isUserRole = () => {

    return userRole;

  }
console.log(userRole);

  return (
    <AuthContext.Provider value={{ authToken, login, isUserRole, logout,register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

  // useEffect(() => {
  //   setIsLoggedIn(!!Cookies.get("token"));
  //   setIsRegistered(!!Cookies.get("token"));
    
  // }, []);

  // return (
  //   <AuthContext.Provider
  //     value={{ isRegistered, isLoggedIn, login, register, logout, headers }}
  //   >
  //     {children}
  //   </AuthContext.Provider>
  // );
// };

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};