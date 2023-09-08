import React, { FC } from "react";
import {
  Container,
  StyledImage,
  OuterContainer,
} from "./ButtonWithRings.style";
import { StyledLink } from "@/styles";

interface Props {
  svgSrc: string;
}

export const ButtonWithRings: FC<Props> = ({ svgSrc }) => {
  return (
    <StyledLink href={"/"}>
      <OuterContainer>
        <Container>
          <StyledImage
            alt='Logo of house'
            src={svgSrc}
            height={25}
            width={25}
          />
        </Container>
      </OuterContainer>
    </StyledLink>
  );
};
