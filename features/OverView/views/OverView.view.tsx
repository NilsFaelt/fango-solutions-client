"use client";
import React, { FC, useContext } from "react";
import { Container } from "./OverView.style";
import { ContentDisplay, DisplayBookmarks } from "@/features";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";
import { NavBarExtras } from "@/components";
import { MenuContext } from "@/context";
import { SlideInContainer } from "@/components/SlideInContainer/SlideInContainer.component";
import { UpdateBookmark } from "@/components/UpdateBookmark/UpdateBookmark.component";
import {
  AddButton,
  DropDownInnerButton,
  HooverButtonDropDown,
  PrimaryButton,
} from "@/ui";

export const OverViewView: FC = () => {
  const { idToken } = useContext(LoggedinUserContext);
  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };
  const { toogleUpdateBookmark, setToogleUpdateBookmark } =
    useContext(MenuContext);
  if (!idToken) return null;
  return (
    <Container>
      <NavBarExtras>
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
      <ContentDisplay idToken={idToken} />
      <SlideInContainer
        toogleContainer={toogleUpdateBookmark}
        setToogleContainer={setToogleUpdateBookmark}
      >
        <UpdateBookmark idToken={idToken} />
      </SlideInContainer>

      <DisplayBookmarks token={idToken} limit={4} />
    </Container>
  );
};
