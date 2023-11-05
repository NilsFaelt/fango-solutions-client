import React, { useContext, useRef } from "react";
import {
  ButtonWrapper,
  Container,
  OuterContainer,
} from "./DocsPopUpView.style";
import { NavBar } from "../components/NavBar";
import { BookmarkDocs } from "../components/BookmarkDocs/BookmarkDocs.component";
import { useClickOustsideToClose } from "@/hooks";
import { MenuContext } from "@/context";
import { PrimaryButton } from "@/ui";

export const DocsPopUpView = () => {
  const { setToogleDocs } = useContext(MenuContext);
  const ref = useRef(null);
  useClickOustsideToClose(ref, setToogleDocs);
  return (
    <OuterContainer>
      <ButtonWrapper>
        <PrimaryButton text='CLOSE' onClick={() => setToogleDocs(false)} />
      </ButtonWrapper>
      <Container ref={ref}>
        <NavBar />
        <BookmarkDocs />
      </Container>
    </OuterContainer>
  );
};
