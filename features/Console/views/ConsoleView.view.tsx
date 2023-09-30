import React, { FC } from "react";
import { Container, TitleWrapper } from "./ConsoleView.style";
import { AddButton, MainTitle } from "@/ui";
import { ProfileCard } from "@/components";

export const ConsoleView: FC = () => {
  return (
    <Container>
      <TitleWrapper>
        <MainTitle
          linkUrl='/'
          text='FANGO SOLUTIONS '
          underText='Simplfied to suit evryone'
        />
      </TitleWrapper>
      <AddButton />
    </Container>
  );
};
