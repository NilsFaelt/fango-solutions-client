interface MenuContextInterface {
  toogleUpdateBookmark: boolean;
  setToogleUpdateBookmark: Dispatch<SetStateAction<boolean>>;
  toogleContentDisplay: boolean;
  setToogleContentDisplay: Dispatch<SetStateAction<boolean>>;
  toogleBlacBackgroundDisplay: boolean;
  setToogleBlacBackgroundDisplay: Dispatch<SetStateAction<boolean>>;
  toogleDocs: boolean;
  setToogleDocs: Dispatch<SetStateAction<boolean>>;
}

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const MenuContext = createContext<MenuContextInterface>({
  toogleUpdateBookmark: false,
  setToogleUpdateBookmark: () => {},
  toogleContentDisplay: false,
  setToogleContentDisplay: () => {},
  toogleBlacBackgroundDisplay: false,
  setToogleBlacBackgroundDisplay: () => {},
  toogleDocs: false,
  setToogleDocs: () => {},
});

export const MenuContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toogleUpdateBookmark, setToogleUpdateBookmark] = useState(false);
  const [toogleContentDisplay, setToogleContentDisplay] = useState(false);
  const [toogleDocs, setToogleDocs] = useState(false);
  const [toogleBlacBackgroundDisplay, setToogleBlacBackgroundDisplay] =
    useState(false);
  return (
    <MenuContext.Provider
      value={{
        toogleBlacBackgroundDisplay,
        setToogleBlacBackgroundDisplay,
        toogleUpdateBookmark,
        setToogleUpdateBookmark,
        toogleContentDisplay,
        setToogleContentDisplay,
        toogleDocs,
        setToogleDocs,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
