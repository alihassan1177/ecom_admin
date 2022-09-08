import React from "react";
import { useState } from "react";
export const UserContext = React.createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) ?? false
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
