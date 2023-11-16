import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 1rem;
  max-height: 14rem;
  border: solid 0.05rem white;
  border-radius: 0.5rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  background-color: transparent;
  box-sizing: border-box;
  @media (max-width: ${mediaQueries.mobile}) {
    padding: 1rem;
  }
`;
