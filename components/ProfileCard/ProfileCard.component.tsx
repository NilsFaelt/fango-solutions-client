"use client";

import React, { FC } from "react";
import {
  Container,
  InfoText,
  InnerLowerContainer,
  InnerUpperContainer,
  Name,
  StyledImage,
} from "./ProfileCard.style";

interface Props {
  name: string;
  jobTitle?: string;
  email?: string;
  imageUrl?: string;
}

export const ProfileCard: FC<Props> = ({ name, jobTitle, email, imageUrl }) => {
  return (
    <Container>
      <StyledImage src={imageUrl} />
      <InnerUpperContainer imageurl={imageUrl!}></InnerUpperContainer>
      <InnerLowerContainer>
        <Name>{name}</Name>
        <InfoText>{jobTitle}</InfoText>
        <InfoText style={{ marginBottom: "1rem" }}>{email}</InfoText>
      </InnerLowerContainer>
    </Container>
  );
};

ProfileCard.defaultProps = {
  name: "Gimli Grey",
  jobTitle: "Dwarf",
  email: "Gimli@gondor.orc",
  imageUrl:
    "https://imgix.ranker.com/list_img_v2/8013/3148013/original/3148013?fit=crop&fm=pjpg&q=60&dpr=2&w=1200&h=720",
};
