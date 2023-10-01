import React from "react";
import { Container } from "./ConsoleNavAside.style";
import { MainTitle } from "@/ui";
import { SIgnOutButton } from ".";

export const ConsoleNavAside = () => {
  return (
    <Container>
      <MainTitle linkUrl='/' text='FANGO SOLUTIONS' />

      <SIgnOutButton />
    </Container>
  );
};
