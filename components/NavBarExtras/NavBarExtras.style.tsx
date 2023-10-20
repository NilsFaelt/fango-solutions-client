import { mediaQueries, theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  gap: 3vw;

  min-height: 5rem;
  background-color: ${theme.colors.backgroundPrimary};
  @media (max-width: ${mediaQueries.mobile}) {
    justify-content: flex-start;
    flex-direction: row-reverse;
    padding-right: 1rem;
  }
`;
