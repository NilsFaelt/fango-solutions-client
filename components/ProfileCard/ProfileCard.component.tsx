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
      <StyledImage
        src={
          photoURL
            ? photoURL
            : "https://images.unsplash.com/photo-1537519646099-335112f03225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        }
      />

      <Name>{displayName}</Name>
      {/* <InfoText>{jobTitle}</InfoText> */}
    </Container>
  );
};
