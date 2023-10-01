import React, { FC } from "react";
import { Container } from "./ConsoleView.style";
import { AddButton, MainTitle } from "@/ui";
import { ProfileCard } from "@/components";
import { DisplayBookmark } from "..";

export const ConsoleView: FC = () => {
  return (
    <Container>
      <AddButton />
      <DisplayBookmark />
      <DisplayBookmark />
      <DisplayBookmark />
    </Container>
  );
};
