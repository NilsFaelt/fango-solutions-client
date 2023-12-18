"use client";
import React, { FC } from "react";
import {
  Container,
  ImageAndTextContainer,
  StyledImage,
  Text,
} from "./DisplayInfo.style";
import { MainTitle } from "@/ui";
import { MainTextContainer } from "@/components";
import data from "../../../data/json/InfoData.json";

export const DisplayInfoView: FC<{ id: string }> = ({ id }) => {
  const item = data.find((item) => item?.id === id);

  return (
    <Container>
      <MainTitle
        linkUrl='/'
        text='FANGO SOLUTIONS'
        underText='Simplfied to suit evryone'
      />
      <ImageAndTextContainer>
        <StyledImage src={item?.imageSrc} />
        <MainTextContainer
          title={item?.title}
          underTitle={item?.underTitle}
          text={item?.shortDescription ? item?.shortDescription : ""}
        />
      </ImageAndTextContainer>
      <Text>{item?.description}</Text>
    </Container>
  );
};
