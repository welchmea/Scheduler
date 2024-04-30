import { createContext, useState } from "react";

type AuthUser = {
  email: string;
};

export type UserContextType = {
  username: any;
  setUsername: any;
  appt: any;
  setAppt: any;
  email: any;
  setEmail: any;
  isAdmin: any;
  setIsAdmin: any;
  token: any;
  setToken: any;
};
type UserContextProviderType = {
  children: React.ReactNode;
};
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [username, setUsername] = useState<AuthUser | null>(null);
  const [appt, setAppt] = useState<AuthUser | null>(null);
  const [email, setEmail] = useState<AuthUser | null>(null);
  const [isAdmin, setIsAdmin] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        appt,
        setAppt,
        email,
        setEmail,
        isAdmin,
        setIsAdmin,
        token,
        setToken
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
