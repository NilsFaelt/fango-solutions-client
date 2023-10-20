import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 5;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 5rem;
  height: 100vh;
  box-shadow: 1.7rem 1rem 1rem 1rem white;
  background-color: black;
  border-left: 0.05rem solid white;
  animation: ${slideIn} 1s;
`;

export const Title = styled.h3`
  position: absolute;
  left: 2rem;
  top: 0rem;
  color: white;
`;
