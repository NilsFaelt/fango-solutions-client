"use client";
import React, { FC, useContext } from "react";
import { Container } from "./AnalyticsView.style";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";
import { useGetAnalytics } from "@/hooks";
import { DisplayAnaltyics } from "..";

export const AnaltyicsView: FC = () => {
  const { idToken } = useContext(LoggedinUserContext);
  if (!idToken) return null;
  return (
    <Container>
      <DisplayAnaltyics idToken={idToken} />
    </Container>
  );
};
