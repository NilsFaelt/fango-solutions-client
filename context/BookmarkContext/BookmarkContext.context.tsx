interface MenuContextInterface {
  setBookmarkId: Dispatch<SetStateAction<null | string>>;
  bookmarkId: string | null;
}

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const BookmarkContext = createContext<MenuContextInterface>({
  setBookmarkId: () => {},
  bookmarkId: null,
});
export const BookmarkContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bookmarkId, setBookmarkId] = useState<null | string>(null);

  return (
    <BookmarkContext.Provider value={{ bookmarkId, setBookmarkId }}>
      {children}
    </BookmarkContext.Provider>
  );
};
