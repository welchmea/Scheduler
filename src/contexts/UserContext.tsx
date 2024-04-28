import { createContext, useState } from "react";

type AuthUser = {
    email: string;
}

export type UserContextType = {
    username: any,
    setUsername: any,
    appt: any,
    setAppt: any
    email: any,
    setEmail: any
}
type UserContextProviderType = {
    children: React.ReactNode
}
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({children}: UserContextProviderType) => {
    const [username, setUsername] = useState<AuthUser | null>(null);
    const [appt, setAppt] = useState<AuthUser | null>(null);
    const [email, setEmail] = useState<AuthUser | null>(null);
    return(
    
    <UserContext.Provider value={{username, setUsername, appt, setAppt, email, setEmail}}>
        {children}
        </UserContext.Provider>

    );
};