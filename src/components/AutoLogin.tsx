import { useMemo, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function AutoLogin() {

  const userContext = useContext(UserContext);

  useMemo(() => {
    async function autoLogin() {
        const response = await fetch("http://localhost:5000/autoLogin", {
          method: "GET",
          credentials: "include",
        });

        if (response.status === 200 || response.status === 201) {
          const id = await response.json();
          userContext.setEmail(id.id);
        } 
    }
    autoLogin();
  }, [userContext.email]);
}
