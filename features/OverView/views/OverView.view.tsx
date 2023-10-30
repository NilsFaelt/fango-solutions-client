"use client";
import React, { FC, useContext } from "react";
import { Container } from "./OverView.style";
import { ContentDisplay, DisplayBookmarks } from "@/features";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";
import { NavBarExtras } from "@/components";
import { MenuContext } from "@/context";
import { SlideInContainer } from "@/components/SlideInContainer/SlideInContainer.component";
import { UpdateBookmark } from "@/components/UpdateBookmark/UpdateBookmark.component";

export const OverViewView: FC = () => {
  const { idToken } = useContext(LoggedinUserContext);
  const { toogleUpdateBookmark, setToogleUpdateBookmark } =
    useContext(MenuContext);
  if (!idToken) return null;
  return (
    <Container>
      <ContentDisplay idToken={idToken} />
      <SlideInContainer
        toogleContainer={toogleUpdateBookmark}
        setToogleContainer={setToogleUpdateBookmark}
      >
        <UpdateBookmark idToken={idToken} />
      </SlideInContainer>
      <NavBarExtras>
        <p>Upcomming</p>
      </NavBarExtras>
      <DisplayBookmarks token={idToken} limit={4} />
    </Container>
  );
};
