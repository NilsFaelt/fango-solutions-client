import React, { FC, ReactNode } from "react";
import { Container } from "./MainLayout.style";
import { HeaderWithNav } from "@/features";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <HeaderWithNav />
      {children}
    </Container>
  );
};

export default MainLayout;
