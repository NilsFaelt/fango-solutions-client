import React, { useContext, useRef } from "react";
import { Container, OuterContainer } from "./DocsPopUpView.style";
import { NavBar } from "../components/NavBar";
import { BookmarkDocs } from "../components/BookmarkDocs/BookmarkDocs.component";
import { useClickOustsideToClose } from "@/hooks";
import { MenuContext } from "@/context";

export const DocsPopUpView = () => {
  const { setToogleDocs } = useContext(MenuContext);
  const ref = useRef(null);
  useClickOustsideToClose(ref, setToogleDocs);
  return (
    <OuterContainer>
      <Container ref={ref}>
        <NavBar />
        <BookmarkDocs />
      </Container>
    </OuterContainer>
  );
};
