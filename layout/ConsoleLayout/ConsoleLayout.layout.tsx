import React, { FC, ReactNode } from "react";
import { Container } from "./ConsoleLayout.style";

interface Props {
  children: ReactNode;
}

export const ConsoleLayout: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ConsoleLayout;
