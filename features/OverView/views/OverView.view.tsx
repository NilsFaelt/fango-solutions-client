"use client";
import React, { FC, useContext } from "react";
import { Container } from "./OverView.style";
import { ContentDisplay, DisplayBookmarks } from "@/features";
import { NavBarExtras } from "@/components";
import { MenuContext } from "@/context";
import { SlideInContainer } from "@/components/SlideInContainer/SlideInContainer.component";
import { UpdateBookmark } from "@/components/UpdateBookmark/UpdateBookmark.component";
import { DropDownInnerButton, HooverButtonDropDown } from "@/ui";
import { useIdToken } from "@/hooks";

export const OverViewView: FC = () => {
  const { token } = useIdToken();
  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };
  const { toogleUpdateBookmark, setToogleUpdateBookmark } =
    useContext(MenuContext);
  if (!token) return null;
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

      <ContentDisplay idToken={token} />
      <SlideInContainer
        toogleContainer={toogleUpdateBookmark}
        setToogleContainer={setToogleUpdateBookmark}
      >
        <UpdateBookmark idToken={token} />
      </SlideInContainer>

      <DisplayBookmarks
        idToken={token}
        limit={10}
        displayStartAllButton={true}
      />
    </Container>
  );
};
