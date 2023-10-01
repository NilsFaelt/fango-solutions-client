"use client";

import React, { FC, useContext } from "react";
import { Container, Name, StyledImage } from "./ProfileCard.style";
import { auth } from "@/firebase";

export const ProfileCard: FC = () => {
  const user = auth.currentUser;

  if (!user) return null;
  const { email, displayName, photoURL } = user;

  return (
    <Container>
      <StyledImage src={photoURL ? photoURL : ""} />

      <Name>{displayName}</Name>
      {/* <InfoText>{jobTitle}</InfoText> */}
    </Container>
  );
};
