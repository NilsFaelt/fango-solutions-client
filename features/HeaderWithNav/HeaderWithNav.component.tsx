"use client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Container, StyledLinkLogo } from "./HeaderWithNav.style";
import { LogginAndLoggedIn } from "@/components";
import { PrimaryButton } from "@/ui";

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

      <PrimaryButton text='LOGGIN and' />
    </Container>
  );
};

//to skip animation when changing page: onClick={() => setToogleMenu(null)}
//Pnpm/npm: styled-components
//If needed update to server-component by removeing "use client"
