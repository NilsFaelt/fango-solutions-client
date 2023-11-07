import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 0.07rem solid white;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 1s, color 1s, box-shadow 1s; /* Add transitions here */

  &:hover {
    background-color: white;
    color: black;
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
