import { mediaQueries, theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.nav`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 1rem 5rem 1rem;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: calc(8rem + 6vw);

  background-color: ${theme.colors.backgroundPrimary};
  @media (max-width: ${mediaQueries.mobile}) {
    /* margin-left: -20rem; */
  }
`;
export const InnerLinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
