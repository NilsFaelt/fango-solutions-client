import { theme } from "@/styles";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  min-width: 7rem;
  height: 3rem;
  cursor: pointer;
  background-color: black;
  border: 0.1rem solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  border-radius: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  color: white;
  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};
    /* background-color: ${theme.colors.extra}; */
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }
`;

export const StyledImage = styled(Image)``;
