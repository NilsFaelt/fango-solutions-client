import { mediaQueries, theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: black;
  background-color: ${theme.colors.backgroundPrimary};
  @media (max-width: ${mediaQueries.tablet}) {
  }
`;
