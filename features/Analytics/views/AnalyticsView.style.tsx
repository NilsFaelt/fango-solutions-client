import { mediaQueries, theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: black;

  @media (max-width: ${mediaQueries.tablet}) {
  }
`;
