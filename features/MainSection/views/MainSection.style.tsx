import { mediaQueries } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 3rem;
  @media (max-width: ${mediaQueries.tablet}) {
    margin-left: 0rem;
    margin-right: 0rem;
    flex-wrap: wrap;
  }
`;
