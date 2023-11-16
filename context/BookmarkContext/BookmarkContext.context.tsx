interface MenuContextInterface {
  setBookmarkId: Dispatch<SetStateAction<null | string>>;
  bookmarkId: string | null;
  setBookmarkActive: Dispatch<SetStateAction<boolean>>;
  bookmarkActive: boolean;
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
  setBookmarkActive: () => {},
  bookmarkActive: false,
});
export const BookmarkContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bookmarkId, setBookmarkId] = useState<null | string>(null);
  const [bookmarkActive, setBookmarkActive] = useState<boolean>(false);

  return (
    <BookmarkContext.Provider
      value={{ bookmarkId, setBookmarkId, setBookmarkActive, bookmarkActive }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
