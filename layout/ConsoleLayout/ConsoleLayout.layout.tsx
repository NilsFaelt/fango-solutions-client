import React, { FC, ReactNode, useContext } from "react";
import { Container } from "./ConsoleLayout.style";
import { ConsoleNavAside, ProfileCard } from "@/components";
import { UnderConstrusction } from "@/components/UnderConstrusction";
import { CookieBanner } from "@/components/CookieBanner/CookieBanner.component";

interface Props {
  children: ReactNode;
}

export const ConsoleLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      {/* <UnderConstrusction /> */}
      {/* <ProfileCard /> */}
      <CookieBanner />
      <ConsoleNavAside />
      {children}
    </Container>
  );
};

export default ConsoleLayout;
