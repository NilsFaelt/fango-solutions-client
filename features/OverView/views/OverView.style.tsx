import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: black;
  background-color: black;

  @media (max-width: ${mediaQueries.tablet}) {
  }
`;
export const ButtonAndInputWrapper = styled.div`
  display: flex;
  gap: calc(0.5rem + 1vw);
  width: 100%;
  top: -1rem;
  flex-wrap: wrap;
  @media (max-width: ${mediaQueries.tablet}) {
    flex-direction: column;
  }
  @media (max-width: ${mediaQueries.mobile}) {
    position: fixed;
    z-index: 3;
    left: 0.7rem;
    top: 5rem;
  }
`;
