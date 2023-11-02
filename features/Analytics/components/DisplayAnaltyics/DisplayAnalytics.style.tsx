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
  width: auto;
  padding: 3rem;
  margin-right: 2rem;
  color: black;
  background-color: transparent;

  ´ @media (max-width: ${mediaQueries.tablet}) {
    padding: 0rem;
    margin-top: 6rem;
    justify-content: center;
  }
  @media (max-width: ${mediaQueries.mobile}) {
    margin-top: 6rem;
    justify-content: center;
    margin-right: 0rem;
  }
`;
export const InputWrapper = styled.div`
  position: absolute;
  top: -1rem;
`;
