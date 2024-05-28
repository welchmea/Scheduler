import { useMemo, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function AutoLogin() {

  const userContext = useContext(UserContext);

  useMemo(() => {
    async function autoLogin() {
      try {
        const response = await fetch("http://localhost:5000/autoLogin", {
          method: "GET",
          credentials: "include",
        });

        if (response.status === 200 || response.status === 201) {
          let id = await response.json();
          userContext.setEmail(id.id);
        } 
      } catch(e) {
        throw e;
      }
    }
    autoLogin();
  }, [userContext.email]);
}
