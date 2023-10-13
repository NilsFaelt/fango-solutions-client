import { FC, useEffect, useState } from "react";
import { Button, Container, Title } from "./CookieBanner.styles";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { StyledLink, StyledLinkBlack } from "@/styles";

export const CookieBanner: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkCookieConsent = () => {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (!cookie.startsWith("cookie_consent=")) {
          setIsVisible(true);
          return;
        }
      }
    };

    checkCookieConsent();
  }, []);

  const handleClick = () => {
    const tenSecondsFromNow = new Date();
    tenSecondsFromNow.setTime(tenSecondsFromNow.getTime() + 10000);
    const expires = tenSecondsFromNow.toUTCString();
    document.cookie = `cookie_consent=accepted; expires=${expires}; path=/`;

    setIsVisible(false);
  };

  return (
    isVisible && (
      <Container>
        <Title>We Use Cookies</Title>
        <MainText color='black'>
          FangoSolutions uses cookies to maintain a good user experience. Please
          read our cookie policy.
        </MainText>
        <StyledLinkBlack href={"/cookie-policy"}>
          Read Cookie Policy
        </StyledLinkBlack>
        <Button onClick={handleClick}>ACCEPT</Button>
      </Container>
    )
  );
};
