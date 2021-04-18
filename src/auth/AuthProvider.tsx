import React, { createContext } from "react";
import useAuthProvider, { IUseAuthProvider } from "./useAuthProvider";

export const AuthContext = createContext<IUseAuthProvider | null>(null);

interface AuthProviderProps {
  children: React.ReactChild;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useAuthProvider();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
