import React, { FC } from "react";
import {
  Container,
  LogoContainer,
  StyledLogo,
  Title,
} from "./ShareButton.style";

export const ShareButton: FC = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareOnFacebook = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
        "_blank"
      );
    }
  };

  const shareOnTwitter = () => {
    if (typeof window !== "undefined") {
      const text = encodeURIComponent("Check out this awesome article!");
      window.open(
        `https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`,
        "_blank"
      );
    }
  };

  const shareOnLinkedIn = () => {
    if (typeof window !== "undefined") {
      const title = encodeURIComponent("My Website");
      window.open(
        `https://www.linkedin.com/shareArticle?url=${currentUrl}&title=${title}`,
        "_blank"
      );
    }
  };

  return (
    <Container>
      <Title>Share on social media</Title>
      <LogoContainer>
        <StyledLogo
          width={25}
          height={25}
          alt='facebook logo'
          onClick={shareOnFacebook}
          src='/svg/facebook.svg'
        />
        <StyledLogo
          width={25}
          height={25}
          alt='linkedin logo'
          onClick={shareOnLinkedIn}
          src='/svg/linkedin.svg'
        />
        <StyledLogo
          width={25}
          height={25}
          alt='twitter logo'
          onClick={shareOnTwitter}
          src='/svg/twitter.svg'
        />
      </LogoContainer>
    </Container>
  );
};
