import React, { FC } from "react";
import { Container } from "./MainTextContainer.style";
import { MainTitle } from "@/ui";

import { MainText } from "@/ui/display/MainText/MainText.component";

interface Props {
  title?: string;
  underTitle?: string;
  text: string;
}

export const MainTextContainer: FC<Props> = ({ title, text, underTitle }) => {
  return (
    <Container>
      <MainTitle text={title ? title : ""} underText={underTitle} />
      <MainText>{text}</MainText>
    </Container>
  );
};
