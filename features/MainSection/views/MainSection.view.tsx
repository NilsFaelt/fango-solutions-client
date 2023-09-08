import React, { FC, ReactNode } from "react";
import { Container } from "./MainSection.style";

interface Props {
  children: ReactNode;
}

const MainSection: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainSection;
