"use client";

import React, { FC, useContext } from "react";
import { Container, Name, StyledImage } from "./ProfileCard.style";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";

export const ProfileCard: FC = () => {
  const { loggedInUser } = useContext(LoggedinUserContext);
  console.log(loggedInUser, " in brah");
  const users = auth.currentUser;

  if (!loggedInUser) return null;
  const { displayName, photoURL } = loggedInUser;

  return (
    <Container>
      <StyledImage src={photoURL ? photoURL : ""} />

      <Name>{displayName}</Name>
      {/* <InfoText>{jobTitle}</InfoText> */}
    </Container>
  );
};
