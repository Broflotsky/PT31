"use client";
import { IUserSession } from "@/interfaces/usersession.interface";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

//! Declarar la interfaz para tipar mi contexto, aqui estarian, estados, funciones y reducers.
interface AuthContextProps {
  dataUser: IUserSession | null; //Sera el estado que almacena el usuario o NULL
  setDataUser: (dataUser: IUserSession | null) => void;
  logout: () => void;
}

// Determinar los valores INICIALES
const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<IUserSession | null>(() => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("userSession");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("userSession", JSON.stringify(dataUser));
    } else {
      localStorage.removeItem("userSession");
    }
  }, [dataUser]);

  const logout = () => {
    setDataUser(null);
  };

  return (
    <AuthContext.Provider value={{ dataUser, setDataUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
