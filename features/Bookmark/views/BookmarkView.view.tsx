"use client";
import React, { FC, useState } from "react";
import { Container } from "./BookmarkView.style";
import { AddBookmarkPopup, DisplayBookmarks } from "..";
import { NavBarExtras } from "@/components";
import { AddButton, DropDownInnerButton, HooverButtonDropDown } from "@/ui";

export const BookmarkView: FC = () => {
  const [toogleAddPopup, setTooglePopup] = useState(false);
  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      <DisplayBookmarks />
      {toogleAddPopup && <AddBookmarkPopup setTooglePopup={setTooglePopup} />}
      <NavBarExtras>
        <AddButton onClick={() => setTooglePopup(true)} />
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
