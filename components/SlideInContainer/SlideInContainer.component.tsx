import React, { FC, ReactNode, useRef } from "react";
import { Container, Title } from "./SlideInContainer.style";
import { useClickOustsideToClose } from "@/hooks";

interface Props {
  title?: string;
  children: ReactNode;
  toogleContainer: boolean;
  setToogleContainer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SlideInContainer: FC<Props> = ({
  children,
  toogleContainer,
  setToogleContainer,
  title,
}) => {
  const ref = useRef(null);
  useClickOustsideToClose(ref, setToogleContainer);

  if (!toogleContainer) return null;
  return (
    <Container ref={ref}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
