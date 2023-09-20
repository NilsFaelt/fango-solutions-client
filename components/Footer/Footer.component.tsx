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
        <StyledLink href={"/display-info/3d0c0ce2-5145-11ee-be56-0242ac120002"}>
          ABOUT
        </StyledLink>
      </LinksContainer>
      <ShareButton />
    </Container>
  );
};
