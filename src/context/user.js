import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
  user: {
    firstname: "",
    lastname: "",
  },
  setUser: null,
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
