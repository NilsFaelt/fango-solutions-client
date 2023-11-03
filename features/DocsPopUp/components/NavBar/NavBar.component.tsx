import React from "react";
import { Container, NavBarButton } from "./NavBar.style";

export const NavBar = () => {
  return (
    <Container>
      <NavBarButton>BOOKMARK</NavBarButton>
      <NavBarButton>ANALYTICS</NavBarButton>
    </Container>
  );
};
