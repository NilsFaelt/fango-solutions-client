import { mediaQueries, theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: black;

  /* background: linear-gradient(
    to left,
    rgba(216, 234, 255, 1),
    rgba(0, 0, 0, 1)
  ); */
  @media (max-width: ${mediaQueries.tablet}) {
  }
`;
