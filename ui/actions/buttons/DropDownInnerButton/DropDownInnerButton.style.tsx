import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 0.3rem;
  min-width: 7rem;
  height: 2rem;
  cursor: pointer;
  background-color: white;
  border: 0.1rem solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};

    color: white;
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }

  width: 100%;
  &:hover {
    color: ${theme.colors.secondary};
  }
`;
export const StyledImage = styled(Image)``;
