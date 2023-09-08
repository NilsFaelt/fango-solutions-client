import React, { FC } from "react";
import { Container, LinksContainer } from "./Footer.style";
import { StyledLink } from "@/styles";
import { ShareButton } from "@/ui";

export const Footer: FC = () => {
  return (
    <Container>
      <LinksContainer>
        <StyledLink href={"/"}>LOGIN</StyledLink>
        <StyledLink href={"/"}>CONTACT</StyledLink>
        <StyledLink href={"/"}>ABOUT</StyledLink>
      </LinksContainer>
      <ShareButton />
    </Container>
  );
};
