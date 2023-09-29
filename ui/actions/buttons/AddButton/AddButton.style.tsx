import { theme } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  border: 0.1rem solid ${theme.colors.primary};
  font-size: 1rem;
  color: black;
  cursor: pointer;
`;
