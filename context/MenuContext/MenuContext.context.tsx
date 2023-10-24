interface MenuContextInterface {
  toogleUpdateBookmark: boolean;
  setToogleUpdateBookmark: Dispatch<SetStateAction<boolean>>;
  toogleContentDisplay: boolean;
  setToogleContentDisplay: Dispatch<SetStateAction<boolean>>;
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
});

export const MenuContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toogleUpdateBookmark, setToogleUpdateBookmark] = useState(false);
  const [toogleContentDisplay, setToogleContentDisplay] = useState(false);
  return (
    <MenuContext.Provider
      value={{
        toogleUpdateBookmark,
        setToogleUpdateBookmark,
        toogleContentDisplay,
        setToogleContentDisplay,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
