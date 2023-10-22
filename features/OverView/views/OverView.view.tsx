"use client";
import React, { FC, useContext } from "react";
import { Container } from "./OverView.style";
import { DisplayBookmarks } from "@/features";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";
import { NavBarExtras } from "@/components";

export const OverViewView: FC = () => {
  const { idToken } = useContext(LoggedinUserContext);
  if (!idToken) return null;
  return (
    <Container>
      <NavBarExtras>
        <p>Upcomming</p>
      </NavBarExtras>
      <DisplayBookmarks token={idToken} limit={4} />
    </Container>
  );
};
