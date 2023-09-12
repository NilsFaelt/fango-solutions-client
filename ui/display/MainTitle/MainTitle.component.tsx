import React, { FC } from "react";
import { Container, Title, UnderText } from "./MainTitle.style";
import { Bebas_Neue, Dancing_Script } from "next/font/google";
import { StyledLink } from "@/styles";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });
interface Props {
  text: string;
  underText?: string;
  linkUrl?: string;
}

export const MainTitle: FC<Props> = ({ text, underText, linkUrl }) => {
  return (
    <Container>
      <StyledLink href={linkUrl ? linkUrl : ""}>
        <Title className={bebasNeue.className}>{text}</Title>
        <UnderText className={dancingScript.className}>{underText}</UnderText>
      </StyledLink>
    </Container>
  );
};
