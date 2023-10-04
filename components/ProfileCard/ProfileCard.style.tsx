import { theme } from "@/styles";
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
  background-color: ${theme.colors.primary};
  border: 0.1rem solid black;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  transform: translateX(-50%);
  border: 0.1rem solid #5a002e;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;
export const Name = styled.h4`
  text-align: center;
  font-size: 1.2rem;
  color: white;
  margin: 0;
  margin-left: -0.7rem;
`;
