"use client";
import React, { FC, useContext, useEffect, useState } from "react";
import { Container } from "./BookmarkView.style";
import { AddBookmark, DisplayBookmarks } from "..";
import { NavBarExtras, SpinUpBookmarks } from "@/components";
import { AddButton, DropDownInnerButton, HooverButtonDropDown } from "@/ui";
import { SlideInContainer } from "@/components/SlideInContainer/SlideInContainer.component";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";
import { useIdToken, useMutatecreateUser } from "@/hooks";
import { MenuContext } from "@/context";
import { UpdateBookmark } from "@/components/UpdateBookmark/UpdateBookmark.component";
import { ContentDisplay } from "@/features";

export const BookmarkView: FC = () => {
  const { toogleUpdateBookmark, setToogleUpdateBookmark } =
    useContext(MenuContext);
  const { token } = useIdToken();
  const { mutate } = useMutatecreateUser(token);
  const [toogleAddBookmarkContainer, setToogleAddBookmarkContainer] =
    useState(false);
  useEffect(() => {
    mutate();
  }, []);
  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };

  if (!token) return null;
  return (
    <Container>
      <ContentDisplay idToken={token} />
      <SlideInContainer
        toogleContainer={toogleUpdateBookmark}
        setToogleContainer={setToogleUpdateBookmark}
      >
        <UpdateBookmark idToken={token} />
      </SlideInContainer>
      <DisplayBookmarks idToken={token} displaySearch={true} />

      <NavBarExtras>
        <SlideInContainer
          setToogleContainer={setToogleAddBookmarkContainer}
          toogleContainer={toogleAddBookmarkContainer}
        >
          <AddBookmark
            setToogleAddBookmarkContainer={setToogleAddBookmarkContainer}
            idToken={token}
          />
        </SlideInContainer>
        <HooverButtonDropDown svgSource='/svg/robot.svg'>
          <DropDownInnerButton
            svgSourc='/svg/google.png'
            text='BARD'
            onClick={() => openNewWindow("https://bard.google.com/chat")}
          />
          <DropDownInnerButton
            svgSourc='/svg/openai.svg'
            text='GTP'
            onClick={() => openNewWindow("https://chat.openai.com")}
          />
        </HooverButtonDropDown>
      </NavBarExtras>
    </Container>
  );
};
