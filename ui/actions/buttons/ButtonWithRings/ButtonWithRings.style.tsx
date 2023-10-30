import { theme } from "@/styles";
import Image from "next/image";
import { styled } from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border: 0.1rem solid ${theme.colors.primary};
  background-color: ${theme.colors.extra};
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  transition: box-shadow 0.3s ease-in-out; /* Add a transition for smooth hover effect */
  &:hover {
    box-shadow: 0 0 2px 2px ${theme.colors.secondary}; /* Add a shimmering box shadow on hover */
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 0.5rem solid ${theme.colors.primary};
  transition: box-shadow 0.3s ease-in-out; /* Add a transition for smooth hover effect */

  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2); /* Add a shimmering box shadow on hover */
  }
`;
export const StyledImage = styled(Image)``;
