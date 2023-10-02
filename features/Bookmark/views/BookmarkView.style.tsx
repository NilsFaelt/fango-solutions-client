import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: black;
  background-color: white;
  @media (max-width: ${mediaQueries.tablet}) {
  }
`;
