import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: any;
  login: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = (user: any) => {
    setUser(user);
    localStorage.setItem("token", user.token); 
    navigate("/"); 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );


  
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
