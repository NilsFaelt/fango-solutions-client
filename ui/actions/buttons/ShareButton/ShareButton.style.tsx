import { theme } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
export const Title = styled.p`
  color: ${theme.colors.primary};
`;
export const StyledLogo = styled.img`
  width: 1.5rem;
  cursor: pointer;
`;
