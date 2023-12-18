"use client";
import React, { FC, ReactNode } from "react";
import { Container } from "./MainLayout.style";
import { HeaderWithNav } from "@/features";
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

      {children}
      <Footer />
    </Container>
  );
};

export default MainLayout;
