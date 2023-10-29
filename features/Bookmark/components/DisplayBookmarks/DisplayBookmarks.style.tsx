import { mediaQueries, theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(0.5rem + 1vw);
  margin-top: 8rem;
  margin-left: calc(8rem + 6vw);
  margin-bottom: 10rem;
  width: auto;
  padding: 3rem;
  color: black;
  @media (max-width: ${mediaQueries.mobile}) {
    margin-top: 6rem;
    justify-content: center;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  gap: 2rem;
  position: absolute;
  top: -1rem;
`;

export const IndicateColorText = styled.p`
  color: ${theme.colors.secondary};
  font-size: 0.7rem;
`;
