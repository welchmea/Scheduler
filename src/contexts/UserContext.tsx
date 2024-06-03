import { createContext, useState } from "react";

type AuthUser = {
  email: string;
};

export type UserContextType = {
  firstName: any,
  setFirstName: any,
  lastName: any,
  setLastName: any,
  appt: any;
  setAppt: any;
  phone: any;
  setPhone: any;
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
  const [firstName, setFirstName] = useState<AuthUser | null>(null);
  const [lastName, setLastName] = useState<AuthUser | null>(null);
  const [appt, setAppt] = useState<AuthUser | null>(null);
  const [phone, setPhone] = useState<AuthUser | null>(null);
  const [email, setEmail] = useState<AuthUser | null>(null);
  const [isAdmin, setIsAdmin] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        appt,
        setAppt,
        phone,
        setPhone,
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
