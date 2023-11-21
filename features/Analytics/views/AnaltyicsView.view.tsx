import React, { FC } from "react";
import { Container } from "./AnalyticsView.style";
import { DisplayAnaltyics } from "..";
import { NavBarExtras } from "@/components";
import { DropDownInnerButton, HooverButtonDropDown } from "@/ui";
import { useIdToken } from "@/hooks";

export const AnaltyicsView: FC = () => {
  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };
  const { token } = useIdToken();

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
      <DisplayAnaltyics idToken={token} />
    </Container>
  );
};
