import React, { FC, ReactNode } from "react";
import { Container } from "./ConsoleLayout.style";
import { ConsoleNavAside, ProfileCard } from "@/components";

interface Props {
  children: ReactNode;
}

export const ConsoleLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <ProfileCard />
      <ConsoleNavAside />
      {children}
    </Container>
  );
};

export default ConsoleLayout;
