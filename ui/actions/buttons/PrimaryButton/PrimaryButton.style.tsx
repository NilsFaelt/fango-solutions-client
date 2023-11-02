import { theme } from "@/styles";
import styled, { keyframes } from "styled-components";

export const Container = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: black;
  border: 0.1rem solid ${theme.colors.primary};
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};
    /* background-color: ${theme.colors.extra}; */
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }
`;
