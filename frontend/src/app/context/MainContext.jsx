import React from "react";
import { useState } from "react";
import { useEffect, useContext } from "react";
import { getDataFromApi } from "../utils/Api";
import { UserContext } from "./UserContext";

export const MainContext = React.createContext();

export default function MainContextProvider({ children }) {
  const { user } = useContext(UserContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    return async () => {
      setUsers(await getDataFromApi("/users", user.token));
    };
  }, []);

  return (
    <MainContext.Provider value={{ users, setUsers }}>
      {children}
    </MainContext.Provider>
  );
}
