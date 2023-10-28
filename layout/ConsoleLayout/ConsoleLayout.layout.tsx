import React, { FC, ReactNode, useContext, useEffect } from "react";
import { BlackBackgroundContainer, Container } from "./ConsoleLayout.style";
import { ConsoleNavAside, ProfileCard } from "@/components";
import { UnderConstrusction } from "@/components/UnderConstrusction";
import { CookieBanner } from "@/components/CookieBanner/CookieBanner.component";
import { MenuContext } from "@/context";

interface Props {
  children: ReactNode;
}

export const ConsoleLayout: FC<Props> = ({ children }) => {
  const { toogleBlacBackgroundDisplay, setToogleBlacBackgroundDisplay } =
    useContext(MenuContext);
  return (
    <Container>
      {/* <UnderConstrusction /> */}

      <CookieBanner />
      <ConsoleNavAside />
      <BlackBackgroundContainer
        onClick={() => setToogleBlacBackgroundDisplay(false)}
        $zindex={toogleBlacBackgroundDisplay ? 1 : 0}
      />
      {children}
    </Container>
  );
};

export default ConsoleLayout;
