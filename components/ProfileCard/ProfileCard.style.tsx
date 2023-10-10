import { mediaQueries, theme } from "@/styles";

import { styled } from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1.5rem;
  width: auto;
  /* border-radius: 1rem; */
  border: 0.1rem solid black;
  background-color: transparent;
  border: none;
  border-bottom: 0.08rem solid white;

  @media (max-width: ${mediaQueries.tablet}) {
    right: 1rem;
  }

  @keyframes spin {
    0% {
      transform: translateX(-50%) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) rotate(360deg);
    }
  }
`;

export const StyledImage = styled.img`
  object-fit: cover;
  transform: translateX(-50%);
  border: 0.1rem solid #5a002e;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export const Name = styled.h4`
  text-align: center;
  font-size: 0.7rem;
  color: white;
  margin: 0;

  margin-left: -0.7rem;
  @media (max-width: ${mediaQueries.tablet}) {
    font-size: 1rem;
  }
`;
