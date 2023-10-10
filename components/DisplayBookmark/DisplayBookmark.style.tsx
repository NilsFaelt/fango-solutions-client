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

export const BookmarkContainer = styled.button`
  min-width: 7rem;
  height: 3rem;
  cursor: pointer;
  background-color: black;
  border: 0.1rem solid ${theme.colors.primary};
  color: white;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};
    /* background-color: ${theme.colors.extra}; */
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }
`;

export const Container = styled.div`
  position: relative;
  &:hover ${BookmarkContainer} {
    box-shadow: 0 0 15px ${theme.colors.secondary};
  }
`;
export const DropDownContainer = styled.div`
  background-color: ${theme.colors.backgroundPrimary};
  position: absolute;
  z-index: 2;
`;

export const Add = styled.button`
  margin-top: 0.3rem;
  min-width: 7rem;
  height: 2rem;
  cursor: pointer;
  background-color: white;
  border: 0.1rem solid ${theme.colors.primary};
  color: black;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};

    color: ${theme.colors.primary};
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }

  width: 100%;
  &:hover {
    ${theme.colors.primary}
  }
`;
