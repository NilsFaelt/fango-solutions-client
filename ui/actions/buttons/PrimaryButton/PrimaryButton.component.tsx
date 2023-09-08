"use client";
import React, { FC } from "react";
import { Container } from "./PrimaryButton.style";

interface Props {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const PrimaryButton: FC<Props> = ({ text = "SEND", onClick }) => {
  return <Container onClick={onClick}>{text}</Container>;
};
