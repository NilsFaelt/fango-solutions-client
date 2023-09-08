import React from "react";
import {
  Container,
  StyledImage,
  OuterContainer,
} from "./ButtonWithRings.style";
import { StyledLink } from "@/styles";

export function ButtonWithRings() {
  return (
    <StyledLink href={"/"}>
      <OuterContainer>
        <Container>
          <StyledImage
            alt='Logo of house'
            src={"/svg/house.svg"}
            height={25}
            width={25}
          />
        </Container>
      </OuterContainer>
    </StyledLink>
  );
}
