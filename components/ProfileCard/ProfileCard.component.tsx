"use client";

import React, { FC, useContext } from "react";
import {
  Container,
  InfoText,
  InnerLowerContainer,
  InnerUpperContainer,
  Name,
  StyledImage,
} from "./ProfileCard.style";
import { auth } from "@/firebase";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";

export const ProfileCard: FC = () => {
  const user = auth.currentUser;

  console.log(user);
  if (!user) return null;
  const { email, displayName, photoURL } = user;

  return (
    <Container>
      <StyledImage src={photoURL ? photoURL : ""} />
      <InnerUpperContainer
        imageurl={photoURL ? photoURL : ""}
      ></InnerUpperContainer>
      <InnerLowerContainer>
        <Name>{displayName}</Name>
        {/* <InfoText>{jobTitle}</InfoText> */}
        <InfoText style={{ marginBottom: "1rem" }}>{email}</InfoText>
      </InnerLowerContainer>
    </Container>
  );
};
