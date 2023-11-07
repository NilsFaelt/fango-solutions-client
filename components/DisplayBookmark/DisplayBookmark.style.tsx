import { mediaQueries, theme } from "@/styles";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    z-index: 0;
    transform: translateY(-100%);
  }
  30% {
    z-index: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
    z-index: 3;
    transform: translateY(0);
  }
`;
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    z-index: 0;
    transform: translateY(100%);
  }
  30% {
    z-index: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
    z-index: 3;
    transform: translateY(0);
  }
`;

export const BookmarkContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  width: calc(7rem + 6vw);
  min-width: 10rem;
  height: 5rem;
  cursor: pointer;
  background-color: black;
  border: 0.07rem solid ${theme.colors.primary};
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  word-break: break-all;
  z-index: 4;
  &:hover {
    color: ${theme.colors.primary};
    transition: 0.3s;
    box-shadow: 0 0 0.3rem ${theme.colors.secondary};

    /* background-color: ${theme.colors.extra}; */
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }
  @media (max-width: ${mediaQueries.mobile}) {
    width: 13rem;
  }
`;

export const Container = styled.div<{ $zindex: number }>`
  position: relative;
  diplay: flex;
  flex-direction: column;
  z-index: ${(props) => props.$zindex};
  &:hover ${BookmarkContainer} {
    box-shadow: 0 0 0.3rem ${theme.colors.secondary};
  }
`;

export const DropDownContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  @media (max-width: ${mediaQueries.mobile}) {
    width: 13rem;
  }
`;
export const DropUpContainer = styled.div`
  position: absolute;
  bottom: 4rem;
  display: flex;
  flex-direction: column;
  z-index: 2;
  animation: ${fadeInUp} 0.5s ease-in-out forwards;
  width: calc(7rem + 6vw);
  min-width: 10rem;

  margin-bottom: 1rem;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  @media (max-width: ${mediaQueries.mobile}) {
    width: 13rem;
  }
`;
export const DeleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.65vw;
  align-items: center;
  justify-content: center;
`;

export const InnerDropUpContainer = styled.div`
  width: 100%;
  padding-bottom: 0.5rem;
  gap: 0.5vw;
  display: flex;
`;
export const SvgImage = styled(Image)``;
export const DropDownChildren = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-top: 0.3rem;
  width: calc(7rem + 6vw);
  height: 3.5rem;
  cursor: pointer;
  font-size: 0.7rem;
  background-color: black;
  border: 0.07rem solid ${theme.colors.primary};
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 0.3rem ${theme.colors.secondary};

    color: ${theme.colors.primary};
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }

  width: 100%;
  &:hover {
    ${theme.colors.primary}
  }
`;

export const StyledA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.3rem;
  width: calc(7rem + 6vw);
  min-width: 10rem;
  height: 3.5rem;
  word-break: break-all;
  cursor: pointer;
  text-align: center;
  background-color: black;
  font-size: 0.7rem;
  border: 0.07rem solid ${theme.colors.primary};
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  text-decoration: none;
  @media (max-width: ${mediaQueries.mobile}) {
    width: 13rem;
  }

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 0.3rem ${theme.colors.secondary};

    color: ${theme.colors.primary};
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }

  &:hover {
    ${theme.colors.primary}
  }
`;
export const TodoImageContainer = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;

export const DeleteConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  word-break: break-all;
  cursor: pointer;
  text-align: center;
  background-color: black;
  font-size: 0.7rem;
  border: 0.1rem solid ${theme.colors.primary};
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  text-decoration: none;
  width: 100%;

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 0.3rem ${theme.colors.secondary};

    color: ${theme.colors.primary};
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }

  &:hover {
    ${theme.colors.primary}
  }
`;
export const DougnutContainer = styled.div`
  width: calc(7rem + 6vw);
  padding: 1rem;
  align-self: center;
  justify-self: center;
  margin: 0 auto;

  box-sizing: border-box;
`;
export const StyledImage = styled.img``;
