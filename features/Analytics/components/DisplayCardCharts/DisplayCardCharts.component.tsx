import React, { FC, ReactNode } from "react";
import { Container } from "./DisplayCardCharts.style";

interface Props {
  children: ReactNode;
}

export const DisplayCardCharts: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
