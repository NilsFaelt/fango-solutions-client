import React, { FC, ReactNode } from "react";
import { Container } from "./NavBarExtras.style";

interface Props {
  children: ReactNode;
}

export const NavBarExtras: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
