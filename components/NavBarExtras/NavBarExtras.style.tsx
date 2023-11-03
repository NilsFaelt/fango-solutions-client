import { mediaQueries, theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: calc(8rem + 6vw);
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  gap: 3vw;
  z-index: 2;
  min-height: 5rem;
  padding-right: 1rem;
  box-sizeing: border-box;
  background-color: ${theme.colors.backgroundPrimary};

  @media (max-width: ${mediaQueries.mobile}) {
  }
`;
