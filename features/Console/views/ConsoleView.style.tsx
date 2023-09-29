import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  @media (max-width: ${mediaQueries.tablet}) {
  }
`;
export const TitleWrapper = styled.div`
  margin-top: 1rem;
  margin-left: 2vw;
`;
