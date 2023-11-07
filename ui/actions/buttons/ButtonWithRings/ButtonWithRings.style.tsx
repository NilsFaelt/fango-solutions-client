import { theme } from "@/styles";
import Image from "next/image";
import { styled } from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border: 0.07rem solid white;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0.1rem 0.1rem 0.1rem grey;
  &:hover {
    box-shadow: 0 0 2px 2px white;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  /* box-shadow: 0 0 2px 2px white; */
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 0.5rem solid white;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 5px white;
  }
`;
export const StyledImage = styled(Image)``;
