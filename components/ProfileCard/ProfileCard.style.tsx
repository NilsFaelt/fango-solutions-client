import { mediaQueries, theme } from "@/styles";
import Image from "next/image";

import { keyframes, styled } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    z-index: ;
    transform: translateY(-100%);
  }
  30% {
    z-index: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
    z-index: ;
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
  background-color: black;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 0.1rem solid white;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 1s, color 1s, box-shadow 1s; /* Add transitions here */

  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0.1rem 0.1rem 0.1rem grey;
    transition: background-color 0.5s, color 1s, box-shadow 1s; /* Add transitions here */
  }
  &:active {
    transition: 0.3s;
    background-color: white;
    color: white;
    box-shadow: 0rem 0rem 0rem;
  }
`;

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  /*  */
  @media (max-width: ${mediaQueries.mobile}) {
    width: calc(7.2rem + 6vw);

    z-index: 3;
  }
`;
export const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  width: calc(7.4rem + 4vw);
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 0.5rem;
  border: solid 0.1rem white;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  z-index: 3;
  padding: 0.6rem;
  right: 0.1rem;
  margin-top: 0rem;
  padding-top: 1.5rem;
  box-shadow: 0.1rem 0.1rem 0.2rem white;
`;

export const StyledImage = styled.img`
  border-radius: 50%;
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
