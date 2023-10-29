import React, { FC, useContext } from "react";
import { Container, SvgImage } from "./NavLink.style";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { StyledLink } from "@/styles";
import { MenuContext } from "@/context";

interface Props {
  text: string;
  linkPath: string;
  svgPath: string;
  altName?: string;
}

export const NavLink: FC<Props> = ({
  linkPath,
  svgPath,
  altName = "svg",
  text,
}) => {
  const { setToogleBlacBackgroundDisplay } = useContext(MenuContext);
  const onClick = () => {
    setToogleBlacBackgroundDisplay(false);
  };
  return (
    <StyledLink onClick={onClick} href={linkPath}>
      <Container>
        <SvgImage alt={altName} width={20} height={20} src={svgPath} />
        <MainText>{text}</MainText>
      </Container>
    </StyledLink>
  );
};
