import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function AutoLogin() {

  const userContext = useContext(UserContext);

  React.useEffect(() => {
    async function autoLogin() {
      try {
        const response = await fetch("http://localhost:5000/autoLogin", {
          method: "GET",
          credentials: "include",
        });

        if (response.status === 200 || response.status === 201) {
          userContext.setEmail(response.json());
        } 
      } catch(e) {
        throw e;
      }
    }
    autoLogin();
  }, []);
}
