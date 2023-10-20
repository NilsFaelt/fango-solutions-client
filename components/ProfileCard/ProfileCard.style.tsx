import { mediaQueries, theme } from "@/styles";

import { styled } from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 1rem;
  width: calc(6rem + 2vw);
  cursor: pointer;
  background-color: black;
  border: 0.1rem solid ${theme.colors.primary};
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 1rem;

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};
    /* background-color: ${theme.colors.extra}; */
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }
  @media (max-width: ${mediaQueries.tablet}) {
    right: 1rem;
  }
  @media (max-width: ${mediaQueries.mobile}) {
    display: none;
  }
`;

export const StyledImage = styled.img`
  object-fit: cover;
  transform: translateX(-50%);
  border: 0.1rem solid white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export const Name = styled.p`
  text-align: center;
  font-size: calc(0.7rem + 0.3vw);
  color: white;
  margin: 0;

  margin-left: -0.7rem;
  @media (max-width: ${mediaQueries.tablet}) {
    font-size: 1rem;
  }
`;
