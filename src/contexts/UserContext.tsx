import { createContext, useState } from "react";

type AuthUser = {
    email: string;
}

export type UserContextType = {
    username: any,
    setUsername: any
}
type UserContextProviderType = {
    children: React.ReactNode
}
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({children}: UserContextProviderType) => {
    const [username, setUsername] = useState<AuthUser | null>(null);
    return(
    
    <UserContext.Provider value={{username, setUsername}}>
        {children}
        </UserContext.Provider>

    );
};