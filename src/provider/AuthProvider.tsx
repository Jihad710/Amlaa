import { createContext, useEffect, useState, ReactNode } from "react";

interface User {
  // Define the properties of your user object here
}

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  openModalRs: boolean;
  setOpenModalRs: (value: boolean) => void; // Define the setter function
  setUser: (value: boolean) => void; // Define the setter function
  setLoading: (value: boolean) => void; // Define the setter function
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  openModalRs: false,
  setOpenModalRs: () => {},
  setUser: () => {},
  setLoading: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModalRs, setOpenModalRs] = useState<boolean>(false);

  useEffect(() => {
    // Your useEffect logic here
  }, []);

  const authInfo: AuthContextType = {
    user,
    loading,
    openModalRs,
    setOpenModalRs,
    setUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
