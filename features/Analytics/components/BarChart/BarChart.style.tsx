import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-height: 10rem;
  max-height: 20rem;
  border: solid 0.05rem white;
  border-radius: 0.5rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  background-color: transparent;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: ${mediaQueries.mobile}) {
    min-height: 15rem;
  }
`;
