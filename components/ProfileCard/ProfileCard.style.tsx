import { mediaQueries, theme } from "@/styles";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 2rem;
  width: auto;
  height: Authorization;
  border-radius: 1rem;
  border: 0.1rem solid black;
  background-color: black;
  border: 0.1rem solid black;
  @media (max-width: ${mediaQueries.tablet}) {
    right: 0rem;
  }
`;

export const StyledImage = styled.img`
  object-fit: cover;
  transform: translateX(-50%);
  border: 0.1rem solid #5a002e;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  @media (max-width: ${mediaQueries.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export const Name = styled.h4`
  text-align: center;
  font-size: 1.2rem;
  color: white;
  margin: 0;
  margin-left: -0.7rem;
  @media (max-width: ${mediaQueries.tablet}) {
    font-size: 1rem;
  }
`;
