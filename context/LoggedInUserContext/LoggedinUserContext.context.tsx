interface MenuContextInterface {
  loggedInUserId: null | string;
  setLoggedInUserId: Dispatch<SetStateAction<null | string>>;
}

import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export const LoggedinUserContext = createContext<MenuContextInterface>({
  loggedInUserId: null,
  setLoggedInUserId: () => {},
});

export const LoggedinUserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loggedInUserId, setLoggedInUserId] = useState<null | string>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedInUserId(user?.uid ? user.uid : null);
    });
    return () => unsubscribe();
  }, []);
  return (
    <LoggedinUserContext.Provider value={{ loggedInUserId, setLoggedInUserId }}>
      {children}
    </LoggedinUserContext.Provider>
  );
};
