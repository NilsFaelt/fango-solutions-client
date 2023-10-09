import { theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.form`
  z-index: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(20rem, 30vw, 50rem);
  gap: 2rem;
  background-color: rgba(0, 0, 0, 1);
  padding: 2rem;
  border-radius: 2rem;
  color: white;
  border-radius: 1rem;
  box-shadow: 0rem 0rem 0.5rem grey;
  padding: 3rem;
`;
export const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
