import React, { FC, ReactNode } from "react";
import { Container } from "./ConsoleLayout.style";
import { HeaderWithNav, Loggin } from "@/features";
import { Footer } from "@/components";
import { MainTitle } from "@/ui";

interface Props {
  children: ReactNode;
}

export const ConsoleLayout: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ConsoleLayout;
