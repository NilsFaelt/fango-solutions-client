import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: auto;

  width: calc(7rem + 6vw);
  min-width: 10rem;
  @media (max-width: ${mediaQueries.mobile}) {
    min-width: 8rem;
  }
`;
