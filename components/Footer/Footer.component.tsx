import React, { FC } from "react";
import { Container, LinksContainer } from "./Footer.style";
import { StyledLink } from "@/styles";
import { ShareButton } from "@/ui";

export const Footer: FC = () => {
  return (
    <Container>
      <LinksContainer>
        <StyledLink href={"/"}>HOME</StyledLink>
        <StyledLink href={"/contact"}>CONTACT</StyledLink>
        <StyledLink href={"/cookie-policy"}>COOKIE POLICY</StyledLink>
      </LinksContainer>
      <ShareButton />
    </Container>
  );
};
