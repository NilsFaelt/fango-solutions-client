import React, { FC, ReactNode } from "react";
import { Container } from "./MainLayout.style";
import { HeaderWithNav } from "@/features";
import { Footer } from "@/components";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <HeaderWithNav />
      {children}
      <Footer />
    </Container>
  );
};

export default MainLayout;
