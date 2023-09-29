import React, { FC } from "react";
import {
  Container,
  StyledImage,
  OuterContainer,
} from "./ButtonWithRings.style";
import { StyledLink } from "@/styles";

interface Props {
  svgSrc: string;
  href: string;
}

export const ButtonWithRings: FC<Props> = ({ svgSrc, href }) => {
  return (
    <StyledLink href={href}>
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
