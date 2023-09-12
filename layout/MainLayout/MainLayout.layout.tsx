import React, { FC, ReactNode } from "react";
import { Container } from "./MainLayout.style";
import { HeaderWithNav, Loggin } from "@/features";
import { Footer } from "@/components";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <HeaderWithNav />
      <Loggin />
      {children}
      <Footer />
    </Container>
  );
};

export default MainLayout;
