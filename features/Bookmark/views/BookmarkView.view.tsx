"use client";
import React, { FC, useRef, useState } from "react";
import { Container } from "./BookmarkView.style";
import { AddBookmarkPopup, DisplayBookmarks } from "..";
import { NavBarExtras } from "@/components";
import { AddButton } from "@/ui";
import { useClickOustsideToClose } from "@/hooks";

export const BookmarkView: FC = () => {
  const addButtonRef = useRef<HTMLButtonElement | null>(null);
  const [toogleAddPopup, setTooglePopup] = useState(false);
  useClickOustsideToClose(addButtonRef, setTooglePopup);

  return (
    <Container>
      <DisplayBookmarks />
      {toogleAddPopup && <AddBookmarkPopup />}
      <NavBarExtras>
        <AddButton ref={addButtonRef} onClick={() => setTooglePopup(true)} />
      </NavBarExtras>
    </Container>
  );
};
