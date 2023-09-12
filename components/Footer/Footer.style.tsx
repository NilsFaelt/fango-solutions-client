import { mediaQueries } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10rem;
  padding-bottom: 3rem;
  box-sizing: border-box;
`;
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: 10rem;
  @media (max-width: ${mediaQueries.tablet}) {
    justify-content: space-between;
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;
