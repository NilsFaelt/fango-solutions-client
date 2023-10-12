import React, { FC, ReactNode, useContext } from "react";
import { Container } from "./ConsoleLayout.style";
import { ConsoleNavAside, ProfileCard } from "@/components";
import { UnderConstrusction } from "@/components/UnderConstrusction";

interface Props {
  children: ReactNode;
}

export const ConsoleLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <UnderConstrusction />
      <ProfileCard />
      <ConsoleNavAside />
      {children}
    </Container>
  );
};

export default ConsoleLayout;
