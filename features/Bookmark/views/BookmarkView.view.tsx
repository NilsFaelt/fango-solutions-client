"use client";
import React, { FC, useState } from "react";
import { Container } from "./BookmarkView.style";
import { AddBookmark, DisplayBookmarks } from "..";
import { NavBarExtras } from "@/components";
import { AddButton, DropDownInnerButton, HooverButtonDropDown } from "@/ui";
import { SlideInContainer } from "@/components/SlideInContainer/SlideInContainer.component";

export const BookmarkView: FC = () => {
  const [toogleContainer, setToogleContainer] = useState(false);
  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      <DisplayBookmarks />

      <NavBarExtras>
        <AddButton onClick={() => setToogleContainer(true)} />
        <SlideInContainer
          title='ADD BOOKMARK'
          setToogleContainer={setToogleContainer}
          toogleContainer={toogleContainer}
        >
          <AddBookmark />
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
