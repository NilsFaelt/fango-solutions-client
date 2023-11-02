"use client";
import React, { FC, useContext } from "react";
import { Container } from "./AnalyticsView.style";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";
import { DisplayAnaltyics } from "..";
import { NavBarExtras } from "@/components";
import { DropDownInnerButton, HooverButtonDropDown } from "@/ui";

export const AnaltyicsView: FC = () => {
  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };
  const { idToken } = useContext(LoggedinUserContext);
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
      <DisplayAnaltyics idToken={idToken} />
    </Container>
  );
};
