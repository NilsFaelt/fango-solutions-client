"use client";
import React, { FC, useContext, useState } from "react";
import {
  ProfileContainer,
  Container,
  Name,
  ButtonWrapper,
} from "./ProfileCard.style";
import { auth } from "@/firebase";

import { LoggedinUserContext } from "@/context/LoggedInUserContext";
import { DropDownContainer } from "@/styles";
import { DeleteAccountButton, PrimaryButton } from "@/ui";

export const ProfileCard: FC = () => {
  const [toogleDropDown, setToogleDropDown] = useState(false);
  const { loggedInUser } = useContext(LoggedinUserContext);

  const user = auth.currentUser;

  if (!loggedInUser) return null;
  const { displayName, photoURL } = loggedInUser;

  return (
    <Container
      onMouseOver={() => setToogleDropDown(true)}
      onMouseLeave={() => setToogleDropDown(false)}
    >
      <ProfileContainer>
        <Name>{displayName}</Name>
      </ProfileContainer>
      {toogleDropDown && (
        <DropDownContainer>
          <ButtonWrapper>
            <DeleteAccountButton />
          </ButtonWrapper>
        </DropDownContainer>
      )}
    </Container>
  );
};
