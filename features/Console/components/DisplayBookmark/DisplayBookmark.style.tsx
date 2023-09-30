import { theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.div``;
export const BookmarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  border: solid white 0.2rem;
  width: calc(5rem + 10vw);
  height: 4rem;
  cursor: pointer;
  transition: background-color 1s, color 1s, box-shadow 1s; /* Add transitions here */

  &:hover {
    border: solid ${theme.colors.extra} 0.2rem;
    background-color: ${theme.colors.primary};
    color: white;
    box-shadow: 0rem 0.1rem 0.1rem grey;
    transition: background-color 0.5s, color 1s, box-shadow 1s; /* Add transitions here */
  }
  &:active {
    transition: 0.3s;
    background-color: white;
    color: white;
    box-shadow: 0rem 0rem 0rem;
  }
`;
export const BookMarkTitle = styled.h3`
  color: white;
  font-size: calc(0.8rem + 1vw);
`;
