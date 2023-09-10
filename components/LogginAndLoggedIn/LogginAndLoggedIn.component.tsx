import React, { useContext } from "react";
import { Container } from "./LogginAndLoggedIn.style";
import { ButtonWithRings, PrimaryButton } from "@/ui";
import { MenuContext } from "@/context";

export const LogginAndLoggedIn = () => {
  const { toogleLoggin, setToogleLoggin } = useContext(MenuContext);
  const loggedIn = false;
  return (
    <Container>
      {loggedIn ? (
        <ButtonWithRings svgSrc='/svg/console.svg' />
      ) : (
        <PrimaryButton onClick={() => setToogleLoggin(true)} text='LOGGIN' />
      )}
    </Container>
  );
};
