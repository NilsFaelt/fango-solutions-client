import { theme } from "@/styles";
import Image from "next/image";
import { styled, keyframes } from "styled-components";

// Define the keyframes for the spin animations
const spinClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinCounterClockwise = keyframes`
  from {
    transform: rotate(360deg);
      
  }
  to {
    transform: rotate(0deg);
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-radius: 50%;
  background-color: ${theme.colors.secondary};
  border: solid white 0.4rem;
  border-top: solid 0.4rem ${theme.colors.primary};
  width: 3.5rem;
  height: 3.5rem;
  transition: box-shadow 0.3s ease-in-out;
  animation: ${spinClockwise} 2s linear infinite;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  border: 0.5rem solid ${theme.colors.primary};
  border-bottom: solid 0.5rem black;
  transition: box-shadow 0.3s ease-in-out;
  animation: ${spinCounterClockwise} 1s linear infinite;
`;
