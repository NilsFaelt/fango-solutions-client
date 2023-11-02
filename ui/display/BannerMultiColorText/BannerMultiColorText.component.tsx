import React, { FC } from "react";
import { Container, Text } from "./BannerMultiColorText.style";

interface Props {
  text: string[];
  colorOne: string;
  colorTwo: string;
}

export const BannerMultiColorText: FC<Props> = ({
  text,
  colorOne,
  colorTwo,
}) => {
  return (
    <Container>
      {text?.map((text, i) => {
        const color = i % 2 === 0 ? colorOne : colorTwo;
        return (
          <Text $color={color} key={i}>
            {text}
          </Text>
        );
      })}
    </Container>
  );
};
