import { theme } from "@/styles";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    z-index: 0;
    transform: translateY(-100%);
  }
  30% {
    z-index: 0;
    opacity: 0;
    
  }
  100% {
    opacity: 1;
    z-index: 3;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const BookmarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid black 0.1rem;
  border-radius: 0rem;
  width: calc(4rem + 8vw);
  height: 3rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transition: top 0.3s;
  }

  &:hover::before {
    top: 0;
  }

  &:hover {
    background-color: white;
    color: white; /* Text color on hover */
    box-shadow: 0rem 0.1rem 0.1rem grey;
  }

  &:not(:hover) {
    transition: background-color 1s, color 1s, box-shadow 1s, border-radius 1s;
  }

  &:active {
    transition: 0.3s;
    background-color: white;
    color: white;
    box-shadow: 0rem 0rem 0rem;
  }
`;

export const BookMarkTitle = styled.h3`
  font-size: calc(0.5rem + 0.8vw);
  color: black;
  transition: color 0.3s;

  ${BookmarkContainer}:hover & {
    z-index: 3;
    color: white;
  }
`;

export const DropDownContainer = styled.div`
  box-sizing: border-box;
  top: 3rem;
  width: 100%;
  background-color: black;
  position: absolute;
  z-index: 3;
  font-size: calc(0.5rem + 0.8vw);
  color: white;

  border-top: none;
  cursor: pointer;

  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  transition: background-color 0.3s; /* Add transition for background-color */
  &:hover {
    color: ${theme.colors.secondary};
  }
  animation: ${fadeIn} 0.7s 0.1s forwards; /* Apply the animation with a 0.3s delay */
  opacity: 0; /* Start with opacity set to 0 */

  ${BookmarkContainer}:hover & {
    z-index: 3;
    color: white;
    background-color: white; /* Change background color on hover */
  }
`;
export const Add = styled.button`
  font-size: calc(0.3rem + 0.5vw);
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;

  width: 100%;
  &:hover {
    color: ${theme.colors.primary};
  }
`;
