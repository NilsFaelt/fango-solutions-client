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
  border: 0.07rem solid white;
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
  @media (max-width: ${mediaQueries.mobile}) {
    z-index: 3;
  }
`;

export const InnerUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 40%;
  background-color: #270014;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  box-shadow: 0.5rem, 0.5rem, 0.5rem black;
  background-image: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2944&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(0px);
`;
export const InnerLowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  box-sizing: border-box;
  padding: 1rem;
  box-shadow: 0.5rem, 0.5rem, 0.5rem black;
`;
export const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  width: 17rem;
  height: 20rem;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 0.5rem;
  /* border: solid 0.1rem ${theme.colors.primary}; */
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  z-index: 10;
  right: 0.1rem;
  margin-top: 0rem;
  box-shadow: 0.1rem 0.1rem 0.1rem grey;
  @media (max-width: ${mediaQueries.mobile}) {
    top: 0rem;
    right: 0;
    width: 14rem;
  }
`;

export const StyledImageSvg = styled.img`
  border-radius: 50%;
`;
export const StyledImage = styled.img`
  border-radius: 50%;
  border: 0.1rem solid black;
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translate(-50%, 0%);
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
