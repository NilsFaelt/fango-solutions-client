import { mediaQueries, theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  padding-top: 2rem;
  z-index: 6;
  box-sizing: border-box;
  overflow: scroll;

  @media (max-width: ${mediaQueries.mobile}) {
    padding-top: 2rem;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }
`;
export const Container = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 7;
  width: clamp(300px, 90vw, 60rem);
  height: 80vh;
  background-color: black;
  border-radius: 0.5rem;
  border: 0.05rem solid white;
  box-shadow: 0.3em 0.3rem 0.3rem black;
  margin-top: 0rem;
  @media (max-width: ${mediaQueries.tablet}) {
  }
  @media (max-width: ${mediaQueries.mobile}) {
  }
`;
