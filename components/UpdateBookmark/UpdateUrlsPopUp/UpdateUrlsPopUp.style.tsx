import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  left: 50%;
  top: 47%;

  transform: translate(-50%, -50%);
  background-color: black;
  padding: 1rem;
  border-radius: 1rem;
  border: solid 0.05rem white;
  z-index: 3;
`;

export const ButtonWrapper = styled.div`
  margin-top: 3rem;
`;
