import React, { FC } from "react";
import { Container, StyledImage } from "./DropDownInnerButton.style";
interface Props {
  onClick: () => void;
  svgSourc?: string;
  text: string;
}

export const DropDownInnerButton: FC<Props> = ({ onClick, text, svgSourc }) => {
  return (
    <Container onClick={onClick}>
      {svgSourc && (
        <StyledImage width={20} height={20} alt='svg loggo' src={svgSourc} />
      )}
      {text}
    </Container>
  );
};
