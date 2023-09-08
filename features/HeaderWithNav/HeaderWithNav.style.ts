import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface LinksContainerProps {
  $menuanimationstate: "open" | "close" | "stale";
}

const openMenuAnimation = keyframes`
  from {
    height: 0vh;
    overflow:hidden;
  }
  to {
    height:calc(100vh - 5rem) ;
  }
`;
const closeMenuAnimation = keyframes`
  from {
    height:calc(100vh - 5rem)
  }
  to {
    height: 0vh;
    overflow:hidden;
  }
`;
const staleMenuAnimation = keyframes`
from{ height: 0vh;
    overflow:hidden;
}
  to {
    height: 0vh;
    overflow:hidden;
  }
`;

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  height: 5rem;
  background-color: white;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const LinksContainer = styled.nav<LinksContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background-color: white;

  @media (max-width: 768px) {
    width: 100vw;
    position: absolute;
    top: 5rem;
    left: 0;
    flex-direction: column;
    animation: ${({ $menuanimationstate }) => {
        switch ($menuanimationstate) {
          case "open":
            return openMenuAnimation;
          case "close":
            return closeMenuAnimation;
          case "stale":
            return staleMenuAnimation;
          default:
            return "none";
        }
      }}
      1s linear forwards;
  }
  @media (max-width: 576px) {
    overflow: hidden;
  }
`;

export const LogoImage = styled(Image)`
  width: 5rem;
  height: 3rem;
`;
export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-align: center;
  width: 100%;
  &:hover {
    color: grey;
    border-bottom: 0.05rem solid black;
  }
`;
export const StyledLinkLogo = styled(Link)`
  color: black;
  text-decoration: none;
  text-align: center;
`;
