import React from "react";
import { Container } from "./LogginAndLoggedIn.style";
import { ButtonWithRings, PrimaryButton } from "@/ui";

export const LogginAndLoggedIn = () => {
  const loggedIn = false;
  return (
    <Container>
      {loggedIn ? (
        <ButtonWithRings svgSrc='/svg/console.svg' />
      ) : (
        <PrimaryButton text='LOGGIN' />
      )}
    </Container>
  );
};
