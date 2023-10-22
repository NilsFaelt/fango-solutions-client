interface LoggedInUser {
  displayName: string;
  photoURL: string;
}
interface MenuContextInterface {
  loggedInUser: null | LoggedInUser;
  idToken: null | string;
  setLoggedInUser: Dispatch<SetStateAction<null | LoggedInUser>>;
  setIdToken: Dispatch<SetStateAction<null | string>>;
}

import { auth } from "@/firebase";
import { useMutatecreateUser } from "@/hooks";

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
  idToken: null,
  setLoggedInUser: () => {},
  setIdToken: () => {},
});
export const LoggedinUserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loggedInUser, setLoggedInUser] = useState<null | LoggedInUser>(null);
  const [idToken, setIdToken] = useState<null | string>(null); // New state for ID token
  const { mutate } = useMutatecreateUser(idToken);
  console.log(idToken);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Set the ID token here
        const token = await user.getIdToken();
        setIdToken(token);

        // Update the logged-in user
        setLoggedInUser({
          displayName: user.displayName ? user.displayName : "",
          photoURL: user.photoURL ? user.photoURL : "",
        });
      } else {
        setIdToken(null); // Clear the ID token when the user logs out
        setLoggedInUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    mutate();
  }, [idToken]);

  return (
    <LoggedinUserContext.Provider
      value={{ loggedInUser, idToken, setLoggedInUser, setIdToken }}
    >
      {children}
    </LoggedinUserContext.Provider>
  );
};
