import React, { FC, ReactNode, useContext } from "react";
import { Container } from "./ConsoleLayout.style";
import { ConsoleNavAside, ProfileCard } from "@/components";

import { useIdToken } from "@/hooks";

interface Props {
  children: ReactNode;
}

export const ConsoleLayout: FC<Props> = ({ children }) => {
  // const token = useIdToken();

  return (
    <Container>
      <ProfileCard />
      <ConsoleNavAside />
      {children}
    </Container>
  );
};

export default ConsoleLayout;
