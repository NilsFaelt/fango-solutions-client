"use client";
import React, { FC, useEffect, useState } from "react";
import { Button, Container, Title } from "./CookieBanner.styles";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { StyledLinkBlack } from "@/styles";

export const CookieBanner: FC = () => {
  const [renreder, setReRender] = useState(false);

  const handleClick = () => {
    const tenSecondsFromNow = new Date();
    tenSecondsFromNow.setTime(tenSecondsFromNow.getTime() + 10000);
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

    const expires = oneWeekFromNow.toUTCString();
    document.cookie = `cookie_consent=accepted; expires=${expires}; path=/`;
    setReRender(!renreder);
  };
  function checkCookieConsent() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith("cookie_consent=")) {
        return true;
      }
    }
    return false;
  }
  useEffect(() => {}, [renreder]);

  if (!checkCookieConsent())
    return (
      <Container>
        <Title>We Use Cookies</Title>
        <MainText color='black'>
          FangoSolutions uses cookies to maintain a good user experience, Please
          read our cookie policy before use
        </MainText>
        <StyledLinkBlack color='black' href={"/cookie-policy"}>
          Read Cookie Policy
        </StyledLinkBlack>
        <Button onClick={handleClick}>ACCEPT</Button>
      </Container>
    );
};
