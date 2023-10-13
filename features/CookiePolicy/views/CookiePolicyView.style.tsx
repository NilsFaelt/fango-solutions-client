import { mediaQueries } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: black;

  margin-left: 13rem;
  margin-right: 13rem;
  margin-bottom: 20rem;
  margin-top: 3rem;
  @media (max-width: ${mediaQueries.tablet}) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  color: white;
`;

export const Title = styled.h4`
  font-size: 1.2rem;
  margin-bottom: -0.5rem;
`;
