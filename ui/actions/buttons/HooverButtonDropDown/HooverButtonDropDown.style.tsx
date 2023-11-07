import { theme } from "@/styles";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const Button = styled.button`
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  &:hover ${Button} {
    box-shadow: 0 0 15px ${theme.colors.secondary};
  }
`;
export const DropDownContainer = styled.div`
  /* background-color: ${theme.colors.backgroundPrimary}; */
  position: absolute;
  top: 2.5rem;
  z-index: 2;
`;

export const StyledLink = styled(Link)`
  margin-top: 0.3rem;
  min-width: 7rem;
  height: 2rem;
  cursor: pointer;
  background-color: white;
  border: 0.1rem solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  border-radius: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};
    background-color: black;
    color: white;
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }

  width: 100%;
  &:hover {
    color: white;
  }
`;
