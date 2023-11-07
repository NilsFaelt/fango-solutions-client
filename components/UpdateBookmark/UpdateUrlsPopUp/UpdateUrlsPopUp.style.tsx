import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  position: absolute;
  left: -2rem;
  right: -2rem;
  top: -2rem;
  bottom: -2rem;
  /* left: 50%;
  top: 47%;

  transform: translate(-50%, -50%); */
  background-color: black;
  padding: 1rem;

  border-left: solid 0.05rem white;
  z-index: 3;
`;

export const AllInputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
`;
export const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  margin-top: 3rem;
  width: 16rem;
  align-self: center;
`;
