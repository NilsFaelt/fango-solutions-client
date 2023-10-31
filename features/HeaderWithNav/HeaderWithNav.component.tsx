"use client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Container, StyledLinkLogo } from "./HeaderWithNav.style";
import { LogginButton, PopUpLoginButton, PrimaryButton } from "@/ui";
import { LoginPopUp } from "@/components";

interface Props {}
interface BurgerMenuProps {
  setToogleMenu: Dispatch<SetStateAction<boolean | null>>;
  toogleMenu: boolean | null;
}

export const HeaderWithNav: FC<Props> = () => {
  const [toogleLoginPopUp, setToogleLoginPopUp] = useState(false);

  return (
    <Container>
      <StyledLinkLogo style={{ width: "auto" }} href={"/"}></StyledLinkLogo>
      {toogleLoginPopUp && <LoginPopUp setTooglePopUp={setToogleLoginPopUp} />}

      <PopUpLoginButton
        setToogle={setToogleLoginPopUp}
        toogle={toogleLoginPopUp}
      />
    </Container>
  );
};
