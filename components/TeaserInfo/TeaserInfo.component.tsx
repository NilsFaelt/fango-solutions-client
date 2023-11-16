"use client";
import { FC } from "react";
import { Bebas_Neue, Rajdhani } from "next/font/google";
import {
  Text,
  CategoryContainer,
  Container,
  InnerLowerContainer,
  InnerUpperContainer,
  Title,
  EndText,
  StyledLink,
} from "./TeaserInfo.style";
import { CategoryColorMap } from "@/styles/colorMaps/categoryColorMap";
import { CategoryColorMapType } from "@/styles/colorMaps";

const roboto = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400"] });

interface Props {
  title: string;
  imageSrc: string;
  text: string;
  categoryText: string;
  categoryColor: CategoryColorMapType;
  link?: string;
  endText?: string;
  endTextDate?: string;
}

export const TeaserInfo: FC<Props> = ({
  title,
  imageSrc,
  categoryText,
  categoryColor,
  text,
  link,
  endTextDate,
  endText,
}) => {
  return (
    <StyledLink href={link ? link : ""}>
      <Container>
        <InnerUpperContainer $imageurl={imageSrc}></InnerUpperContainer>
        <InnerLowerContainer>
          <CategoryContainer $bgcolor={CategoryColorMap.get(categoryColor)}>
            <Text>{categoryText}</Text>
          </CategoryContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <>
            <EndText>
              {endTextDate}
              <br /> {endText}
            </EndText>
          </>
        </InnerLowerContainer>
      </Container>
    </StyledLink>
  );
};
