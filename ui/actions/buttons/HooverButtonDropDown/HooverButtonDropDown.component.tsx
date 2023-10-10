"use cleint";
import React, { FC, ReactNode, useState } from "react";
import {
  Button,
  Container,
  DropDownContainer,
} from "./HooverButtonDropDown.style";

interface Props {
  children: ReactNode;
  svgSource: string;
}

export const HooverButtonDropDown: FC<Props> = ({ svgSource, children }) => {
  const [toogleDropDown, setToogleDropDown] = useState(false);
  return (
    <Container
      onMouseEnter={() => setToogleDropDown(true)}
      onMouseLeave={() => setToogleDropDown(false)}
    >
      <Button> AI</Button>
      {toogleDropDown && <DropDownContainer>{children}</DropDownContainer>}
    </Container>
  );
};
