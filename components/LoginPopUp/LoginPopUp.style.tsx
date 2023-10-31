import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 300%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  background-color: black;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  padding: 2.5rem 5rem 5rem 5rem;
  z-index: 1000;
  box-shadow: 0.1em 0.1rem 0.1rem white;
  @media (max-width: ${mediaQueries.mobile}) {
    padding: 2.5rem 3rem 5rem 3rem;
  }
`;
export const LabelAndButtonContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 1rem;
`;
export const ExtraText = styled.p`
  cursor: pointer;
  font-size: 0.7rem;
  color: white;
`;
