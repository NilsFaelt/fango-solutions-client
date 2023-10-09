import React, { FC } from "react";
import { Container } from "./AddButton.style";
interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ref: React.RefObject<HTMLButtonElement>;
}
export const AddButton: FC<Props> = ({ onClick, ref }) => {
  return (
    <Container ref={ref} onClick={onClick}>
      +
    </Container>
  );
};
