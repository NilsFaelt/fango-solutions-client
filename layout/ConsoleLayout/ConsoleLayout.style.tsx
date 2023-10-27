import { styled } from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: black;
`;
export const BlackBackgroundContainer = styled.main<{ $zindex: number }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0rem;
  bottom: 0rem;
  left: 0rem;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: ${(props) => props.$zindex};
`;
