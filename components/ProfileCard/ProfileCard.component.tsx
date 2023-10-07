"use client";
import React, { FC, useContext } from "react";
import { Container, Name, StyledImage } from "./ProfileCard.style";
import { auth } from "@/firebase";

import { LoggedinUserContext } from "@/context/LoggedInUserContext";

export const ProfileCard: FC = () => {
  const { loggedInUser } = useContext(LoggedinUserContext);

  const user = auth.currentUser;
  console.log(user);
  if (!loggedInUser) return null;
  const { displayName, photoURL } = loggedInUser;

  return (
    <Container>
      <StyledImage src={"/svg/logga.png"} />

      <Name>{displayName}</Name>
      {/* <InfoText>{jobTitle}</InfoText> */}
    </Container>
  );
};
