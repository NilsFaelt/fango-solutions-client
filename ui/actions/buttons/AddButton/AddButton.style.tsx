import { theme } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  border: 0.1rem solid white;
  font-size: 1rem;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 1s, color 1s, box-shadow 1s; /* Add transitions here */

  &:hover {
    background-color: ${theme.colors.primary};
    color: white;
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
