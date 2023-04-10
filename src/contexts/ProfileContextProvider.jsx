import { createContext, useState } from "react";

export const ProfileContext = createContext(null);

export const ProfileContextProvider = ({ children }) => {
  const [userValue, setUserValue] = useState(null);

  const value = {
    userValue,
    setUserValue
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
