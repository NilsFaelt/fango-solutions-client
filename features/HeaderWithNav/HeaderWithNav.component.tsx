"use client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import {
  Container,
  LinksContainer,
  LogoImage,
  StyledLink,
  StyledLinkLogo,
} from "./HeaderWithNav.style";
import { BarOne, BarThree, BarTwo, BarWrapper } from "./BurgerMenu.style";

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
    { text: "Whitepaper", href: "/" },
  ];
  return (
    <Container>
      <StyledLinkLogo style={{ width: "auto" }} href={"/"}>
        <LogoImage
          priority
          src={"/heart.svg"}
          alt={"next logo"}
          width={15}
          height={15}
        />
      </StyledLinkLogo>
      <LinksContainer
        $menuanimationstate={
          toogleMenu === null ? "stale" : toogleMenu === true ? "open" : "close"
        }
      >
        {Links.map((link, i) => {
          return (
            <StyledLink
              onClick={() => setToogleMenu(false)}
              key={i}
              href={link.href}
            >
              {link.text}
            </StyledLink>
          );
        })}
      </LinksContainer>
      <BurgerMenu setToogleMenu={setToogleMenu} toogleMenu={toogleMenu} />
    </Container>
  );
};

export const BurgerMenu: FC<BurgerMenuProps> = ({
  setToogleMenu,
  toogleMenu,
}) => {
  return (
    <BarWrapper onClick={() => setToogleMenu(!toogleMenu)}>
      <BarOne />
      <BarTwo />
      <BarThree />
    </BarWrapper>
  );
};

//to skip animation when changing page: onClick={() => setToogleMenu(null)}
//Pnpm/npm: styled-components
//If needed update to server-component by removeing "use client"
