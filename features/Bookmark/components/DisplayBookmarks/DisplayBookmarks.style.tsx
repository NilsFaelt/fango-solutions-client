import { mediaQueries, theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(0.5rem + 1vw);
  margin-top: 5rem;
  margin-left: calc(8rem + 6vw);
  margin-bottom: 10rem;
  width: auto;
  padding: 3rem;
  color: black;

  @media (max-width: ${mediaQueries.tablet}) {
    justify-content: flex-start;
    padding-left: 0;
  }
  @media (max-width: ${mediaQueries.mobile}) {
    margin-top: 8rem;
    padding: 0;
    padding-top: 3rem;
    padding-right: 1rem;
    justify-content: center;
    justify-content: flex-end;
  }
`;
export const ButtonWrapper = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  min-width: calc(7rem + 4vw);
`;
export const ButtonAndInputWrapper = styled.div`
  display: flex;
  gap: calc(0.5rem + 1vw);

  width: 100%;
  top: -1rem;
  flex-wrap: wrap;
  @media (max-width: ${mediaQueries.tablet}) {
  }
  @media (max-width: ${mediaQueries.mobile}) {
    flex-direction: column;
    position: fixed;
    z-index: 3;
    left: 0.7rem;
    top: 5rem;
  }
`;

export const IndicateColorText = styled.p`
  color: ${theme.colors.secondary};
  font-size: 0.7rem;
`;
