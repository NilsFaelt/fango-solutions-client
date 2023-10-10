import React, { FC } from "react";
import { Container } from "./AddButton.style";
interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const AddButton: FC<Props> = ({ onClick }) => {
  return <Container onClick={onClick}>+</Container>;
};
