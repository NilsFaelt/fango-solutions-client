import React, { FC, ReactNode } from "react";
import { Container } from "./MainLayout.style";
import { HeaderWithNav, Loggin } from "@/features";
import { Footer } from "@/components";
import { CookieBanner } from "@/components/CookieBanner/CookieBanner.component";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <CookieBanner />
      <HeaderWithNav />
      <Loggin />

      {children}
      <Footer />
    </Container>
  );
};

export default MainLayout;
