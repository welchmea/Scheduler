import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export type UserContextType = {
  firstName: string | null,
  setFirstName: Dispatch<SetStateAction<string | null>>,
  lastName: string | null,
  setLastName: Dispatch<SetStateAction<string | null>>,
  appt: string | null,
  setAppt: Dispatch<SetStateAction<string | null>>,
  phone: string | null;
  setPhone: Dispatch<SetStateAction<string | null>>,
  email: string | null;
  setEmail: Dispatch<SetStateAction<string | null>>,
  isAdmin: boolean | null;
  setIsAdmin: Dispatch<SetStateAction<boolean | null>>,
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>,
};
type UserContextProviderType = {
  children: ReactNode;
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
