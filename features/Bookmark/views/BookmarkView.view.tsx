"use client";
import React, { FC, useContext, useEffect, useState } from "react";
import { Container } from "./BookmarkView.style";
import { AddBookmark, DisplayBookmarks } from "..";
import { NavBarExtras, SpinUpBookmarks } from "@/components";
import { AddButton, DropDownInnerButton, HooverButtonDropDown } from "@/ui";
import { SlideInContainer } from "@/components/SlideInContainer/SlideInContainer.component";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";
import { useMutatecreateUser } from "@/hooks";
import { MenuContext } from "@/context";
import { UpdateBookmark } from "@/components/UpdateBookmark/UpdateBookmark.component";
import { ContentDisplay } from "@/features";

export const BookmarkView: FC = () => {
  const { toogleUpdateBookmark, setToogleUpdateBookmark } =
    useContext(MenuContext);
  const { idToken } = useContext(LoggedinUserContext);
  const { mutate } = useMutatecreateUser(idToken);
  const [toogleAddBookmarkContainer, setToogleAddBookmarkContainer] =
    useState(false);
  useEffect(() => {
    mutate();
  }, []);
  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };

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
      <DisplayBookmarks idToken={idToken} displaySearch={true} />

      <NavBarExtras>
        <AddButton onClick={() => setToogleAddBookmarkContainer(true)} />
        <SlideInContainer
          setToogleContainer={setToogleAddBookmarkContainer}
          toogleContainer={toogleAddBookmarkContainer}
        >
          <AddBookmark
            setToogleAddBookmarkContainer={setToogleAddBookmarkContainer}
            idToken={idToken}
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
