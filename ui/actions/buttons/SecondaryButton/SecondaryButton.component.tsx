"use client";
import React, { FC } from "react";
import { Container } from "./SecondaryButton.style";

interface Props {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SecondaryButton: FC<Props> = ({ text = "SEND", onClick }) => {
  return <Container onClick={onClick}>{text}</Container>;
};
