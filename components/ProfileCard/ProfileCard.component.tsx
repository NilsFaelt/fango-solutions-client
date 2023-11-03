"use client";
import React, { FC, useContext, useRef, useState } from "react";
import {
  ProfileContainer,
  Container,
  StyledImage,
  DropDownContainer,
} from "./ProfileCard.style";
import { auth } from "@/firebase";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";
import { useClickOustsideToClose } from "@/hooks";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { NavLink } from "../ConsoleNavAside/components";
import { DeleteAccountButton } from "@/ui";

export const ProfileCard: FC = () => {
  const ref = useRef(null);
  const [toogleDropDown, setToogleDropDown] = useState(false);
  const { loggedInUser } = useContext(LoggedinUserContext);
  useClickOustsideToClose(ref, setToogleDropDown);
  const user = auth.currentUser;

  if (!loggedInUser || !user) return null;
  const { displayName, email } = loggedInUser;
  const userImageUrl = user?.photoURL ? user?.photoURL : "/svg/web.svg";
  const nameOrEmail = displayName ? displayName : email;

  return (
    <Container ref={ref} onClick={() => setToogleDropDown(true)}>
      <ProfileContainer>
        <StyledImage
          alt='user-image'
          src='/svg/user.svg'
          width={25}
          height={25}
        />
      </ProfileContainer>
      {toogleDropDown && (
        <DropDownContainer>
          <DeleteAccountButton />
          <StyledImage
            src={userImageUrl}
            width={50}
            height={50}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.src = "/svg/web.svg";
            }}
          />
          <MainText margin='1' color='white'>
            {nameOrEmail}
          </MainText>
          {/* <ButtonWrapper>
            <DeleteAccountButton />
          </ButtonWrapper> */}
          <NavLink text='My Settings' linkPath='/' svgPath='/svg/web.svg' />
        </DropDownContainer>
      )}
    </Container>
  );
};
