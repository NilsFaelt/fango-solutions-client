import { mediaQueries, theme } from "@/styles";
import Image from "next/image";

import { keyframes, styled } from "styled-components";

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

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  width: calc(7rem + 4vw);
  cursor: pointer;
  background-color: black;
  border: 0.1rem solid ${theme.colors.primary};
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  word-break: break-all;
  z-index: 9;
  &:hover {
    color: ${theme.colors.primary};
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};
    /* background-color: ${theme.colors.extra}; */
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }
  @media (max-width: ${mediaQueries.mobile}) {
    width: 5.3rem;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  diplay: flex;
  flex-direction: column;
  /*  */
  @media (max-width: ${mediaQueries.mobile}) {
    width: calc(7.2rem + 6vw);
    left: 1rem;
    top: 5rem;
    z-index: 3;
  }
`;
export const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  width: calc(7rem + 4vw);
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 0.5rem;
  border: solid 0.1rem white;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  z-index: 3;
  padding: 1rem;
  margin-top: -3.7rem;
  box-shadow: 0.1rem 0.1rem 0.2rem white;
`;

export const StyledImage = styled.img`
  border-radius: 50%;
  margin-top: 0.5rem;
`;
export const Name = styled.p`
  text-align: center;
  font-size: calc(0.7rem + 0.3vw);
  color: white;
  margin: 0;
  margin-left: -0.7rem;
  @media (max-width: ${mediaQueries.mobile}) {
    font-size: 0.7rem;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 0.2rem;
`;
