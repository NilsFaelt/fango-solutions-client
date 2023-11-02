import { mediaQueries, theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: black;
  background-image: url("https://images.unsplash.com/photo-1663787652609-57b525eb6ee6?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: contain;
  /* background: linear-gradient(
    to left,
    rgba(216, 234, 255, 1),
    rgba(0, 0, 0, 1)
  ); */
  @media (max-width: ${mediaQueries.tablet}) {
  }
`;
