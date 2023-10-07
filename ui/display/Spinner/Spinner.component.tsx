import React from "react";
import { Container, OuterContainer } from "./Spinner.style";
import Image from "next/image";

export const Spinner = () => {
  return (
    <OuterContainer>
      <Container>
        <Image src={"/svg/logga.png"} width={20} height={20} alt='loggo' />
      </Container>
    </OuterContainer>
  );
};
