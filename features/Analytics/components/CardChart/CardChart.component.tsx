import React, { FC } from "react";
import {
  Container,
  InnerContainer,
  StyledImage,
  Title,
} from "./CardChart.style";
import { UnderTitle } from "@/components/TeaserInfo/TeaserInfo.style";
import { MainText } from "@/ui/display/MainText/MainText.component";

interface CardChartProps<T> {
  mainTitle: string;
  backGroundColor: string;
  imageSrc: string;
  underTitle: string;
}
export const CardChart = <T extends {}>({
  mainTitle,
  underTitle,
  backGroundColor,
  imageSrc,
}: CardChartProps<T>) => {
  return (
    <Container $backgroundcolor={backGroundColor}>
      <StyledImage alt='svg image' src={imageSrc} width={30} height={30} />
      <InnerContainer>
        <Title>{mainTitle}</Title>
        <MainText margin='0'>{underTitle}</MainText>
      </InnerContainer>
    </Container>
  );
};
