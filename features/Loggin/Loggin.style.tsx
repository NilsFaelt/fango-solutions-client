import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  gap: 1rem;
  padding: 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20rem;
  height: 30rem;
  border-radius: 1rem;
  border: 0.05rem solid white;
  box-shadow: 0.5rem 0.5rem 0.5rem black;
  background-color: white;
  background-image: url("/images/pattern.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
`;
