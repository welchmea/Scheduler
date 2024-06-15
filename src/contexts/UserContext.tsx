import { createContext, useState } from "react";

export type UserContextType = {
  firstName: string | null,
  setFirstName: any,
  lastName: string | null,
  setLastName: any,
  appt: any;
  setAppt: any;
  phone: string | null;
  setPhone: any;
  email: string | null;
  setEmail: any;
  isAdmin: boolean | null;
  setIsAdmin: any;
  token: string | null;
  setToken: any;
};
type UserContextProviderType = {
  children: React.ReactNode;
};
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [appt, setAppt] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [token, setToken] = useState<string | null>(null);
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
