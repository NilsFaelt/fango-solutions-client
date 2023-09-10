interface MenuContextInterface {
  toogleMenu: boolean;
  setToogleMenu: Dispatch<SetStateAction<boolean>>;
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
  toogleMenu: false,
  setToogleMenu: () => {},
  toogleLoggin: false,
  setToogleLoggin: () => {},
});

export const MenuContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toogleMenu, setToogleMenu] = useState(true);
  const [toogleLoggin, setToogleLoggin] = useState(false);
  return (
    <MenuContext.Provider
      value={{ toogleMenu, setToogleMenu, toogleLoggin, setToogleLoggin }}
    >
      {children}
    </MenuContext.Provider>
  );
};
