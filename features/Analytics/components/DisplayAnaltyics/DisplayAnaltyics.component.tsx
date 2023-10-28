import React, { FC } from "react";
import { Container } from "./DisplayAnalytics.style";
import { DisplayEachAnalytics } from "..";

export const DisplayAnaltyics: FC = () => {
  return (
    <Container>
      <DisplayEachAnalytics />
      <DisplayEachAnalytics />
      <DisplayEachAnalytics />
    </Container>
  );
};
