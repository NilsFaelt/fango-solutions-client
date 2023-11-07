"use client";
import React, { FC, useContext, useRef, useState } from "react";
import {
  ProfileContainer,
  Container,
  StyledImage,
  DropDownContainer,
  InnerUpperContainer,
  StyledImageSvg,
  InnerLowerContainer,
} from "./ProfileCard.style";
import { auth } from "@/firebase";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";
import { useClickOustsideToClose } from "@/hooks";
import { MainText } from "@/ui/display/MainText/MainText.component";

import { DeleteAccountButton, MainTitle } from "@/ui";
import { MenuContext } from "@/context";

export const ProfileCard: FC = () => {
  const ref = useRef(null);
  const [toogleDropDown, setToogleDropDown] = useState(false);
  const { loggedInUser } = useContext(LoggedinUserContext);
  const { setToogleBlacBackgroundDisplay } = useContext(MenuContext);
  useClickOustsideToClose(ref, setToogleDropDown);
  useClickOustsideToClose(ref, setToogleBlacBackgroundDisplay);
  const user = auth.currentUser;

  if (!loggedInUser || !user) return null;
  const { displayName, email } = loggedInUser;
  const userImageUrl = user?.photoURL ? user?.photoURL : "/svg/web.svg";
  const nameOrEmail = displayName ? displayName : email;

  return (
    <Container
      ref={ref}
      onClick={() => {
        setToogleBlacBackgroundDisplay(true), setToogleDropDown(true);
      }}
    >
      <ProfileContainer>
        <StyledImageSvg
          alt='user-image'
          src='/svg/user.svg'
          width={25}
          height={25}
        />
      </ProfileContainer>
      {toogleDropDown && (
        <DropDownContainer>
          {/* <DeleteAccountButton /> */}
          <InnerUpperContainer>
            <StyledImage
              src={userImageUrl}
              width={70}
              height={70}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src = "/svg/web.svg";
              }}
            />
          </InnerUpperContainer>
          <InnerLowerContainer>
            <MainTitle text={nameOrEmail.toUpperCase()} />
            {/* <MainText fontSize='16' margin='1' color='white'>
              {nameOrEmail}
            </MainText> */}
            <DeleteAccountButton />
          </InnerLowerContainer>

          {/* <NavLink text='My Settings' linkPath='/' svgPath='/svg/web.svg' /> */}
        </DropDownContainer>
      )}
    </Container>
  );
};
