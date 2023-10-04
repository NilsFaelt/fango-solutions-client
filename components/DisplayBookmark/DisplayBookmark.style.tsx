import { theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.div``;
export const BookmarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0rem;
  border: solid ${theme.colors.extra} 0.2rem;
  background-color: ${theme.colors.primary};
  color: white;
  border-radius: 1rem;
  width: calc(5rem + 10vw);
  height: 4rem;
  cursor: pointer;
  transition: background-color 1s, color 1s, box-shadow 1s, border-radius 1s; /* Add transitions here */

  &:hover {
    border: solid ${theme.colors.extra} 0.2rem;
    background-color: white;
    color: white;
    border-radius: 1rem;
    box-shadow: 0rem 0.1rem 0.1rem grey;
    transition: background-color 1.5s, color 1s, box-shadow 1s, border-radius 1s; /* Add transitions here */
  }

  &:not(:hover) {
    transition: background-color 1s, color 1s, box-shadow 1s, border-radius 1s; /* Revert transition properties */
  }

  &:active {
    transition: 0.3s;
    background-color: white;
    color: white;
    box-shadow: 0rem 0rem 0rem;
  }
`;

export const BookMarkTitle = styled.h3`
  font-size: calc(0.8rem + 1vw);
  transition: color 1s; /* Add a transition for color change */
  color: white;

  ${BookmarkContainer}:hover & {
    color: black; /* Change color on hover */
  }
`;
