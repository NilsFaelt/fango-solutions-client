import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(0.5rem + 1vw);
  margin-left: calc(8rem + 6vw);
  margin-bottom: 10rem;
  margin-top: 4rem;
  width: auto;
  padding: 3rem;
  margin-right: 2rem;
  color: black;

  box-sizing: border-box;

  ´ @media (max-width: ${mediaQueries.tablet}) {
    padding: 0rem;
    margin-top: 6rem;
    justify-content: center;
  }
  @media (max-width: ${mediaQueries.mobile}) {
    padding: 0rem;
    padding-right: 1rem;
    margin-top: 6rem;
    justify-content: center;
    margin-right: 0rem;
    width: 17rem;
  }
`;
export const InputWrapper = styled.div`
  position: absolute;
  top: -1rem;
`;
export const ChartRowWrapper = styled.div``;
