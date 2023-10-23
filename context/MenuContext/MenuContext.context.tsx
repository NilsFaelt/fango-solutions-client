interface MenuContextInterface {
  toogleUpdateBookmark: boolean;
  setToogleUpdateBookmark: Dispatch<SetStateAction<boolean>>;
  toogleLoggin: boolean;
  setToogleLoggin: Dispatch<SetStateAction<boolean>>;
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
  toogleLoggin: false,
  setToogleLoggin: () => {},
});

export const MenuContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toogleUpdateBookmark, setToogleUpdateBookmark] = useState(false);
  const [toogleLoggin, setToogleLoggin] = useState(false);
  return (
    <MenuContext.Provider
      value={{
        toogleUpdateBookmark,
        setToogleUpdateBookmark,
        toogleLoggin,
        setToogleLoggin,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
