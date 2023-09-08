interface MenuContextInterface {
  toogleMenu: boolean;
  setToogleMenu: Dispatch<SetStateAction<boolean>>;
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
});

export const MenuContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toogleMenu, setToogleMenu] = useState(true);
  return (
    <MenuContext.Provider value={{ toogleMenu, setToogleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
