interface LoggedInUser {
  displayName: string;
  photoURL: string;
}
interface MenuContextInterface {
  loggedInUser: null | LoggedInUser;
  setLoggedInUser: Dispatch<SetStateAction<null | LoggedInUser>>;
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
  loggedInUser: null,
  setLoggedInUser: () => {},
});

export const LoggedinUserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loggedInUser, setLoggedInUser] = useState<null | LoggedInUser>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedInUser({
        displayName: user?.displayName ? user.displayName : "",
        photoURL: user?.photoURL ? user.photoURL : "",
      });
    });
    return () => unsubscribe();
  }, []);
  return (
    <LoggedinUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </LoggedinUserContext.Provider>
  );
};
