import { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState } from "react";

export type appointment = {
  _id: string | null;
  service: string | null;
  date: string | null;
  time: FormDataEntryValue | null;
  description: FormDataEntryValue | null;
}
export type UserContextType = {
  firstName: string | null,
  setFirstName: Dispatch<SetStateAction<string | null>>,
  lastName: string | null,
  setLastName: Dispatch<SetStateAction<string | null>>,
  appt: appointment | null,
  setAppt: Dispatch<SetStateAction<appointment | null>>,
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

  useMemo(() => {
    async function autoLogin() {
        const response = await fetch("http://localhost:5000/autoLogin", {
          method: "GET",
          credentials: "include",
        });

        if (response.status === 200 || response.status === 201) {
          const id = await response.json();
          setEmail(id.id);
        } 
    }
    autoLogin();
  }, []);
  
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [appt, setAppt] = useState<appointment | null>(null);
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
