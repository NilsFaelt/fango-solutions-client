import React, { FC } from "react";
import { Container, TitleWrapper } from "./ConsoleView.style";
import { MainTitle } from "@/ui";

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
    </Container>
  );
};
