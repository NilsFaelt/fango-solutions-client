"use client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Container, StyledLinkLogo } from "./HeaderWithNav.style";

import { LogginButton } from "@/ui";

interface Props {}
interface BurgerMenuProps {
  setToogleMenu: Dispatch<SetStateAction<boolean | null>>;
  toogleMenu: boolean | null;
}

export const HeaderWithNav: FC<Props> = () => {
  const [toogleMenu, setToogleMenu] = useState<boolean | null>(null);
  const Links: { text: string; href: string }[] = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/" },
  ];
  return (
    <Container>
      <StyledLinkLogo style={{ width: "auto" }} href={"/"}></StyledLinkLogo>

      <LogginButton />
    </Container>
  );
};
