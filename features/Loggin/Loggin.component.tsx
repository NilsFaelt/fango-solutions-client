import React from "react";
import { Container } from "./Loggin.style";
import { MainTitle, PrimaryButton } from "@/ui";

export const Loggin = () => {
  return (
    <Container>
      <MainTitle text='LOGGIN' underText='To console' />
      <PrimaryButton text='LOGGIN' />
    </Container>
  );
};
