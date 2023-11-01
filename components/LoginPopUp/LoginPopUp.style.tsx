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
  background-color: rgba(0, 0, 0, 0.7);
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  padding: 2.5rem 5rem 5rem 5rem;
  z-index: 1000;
  box-shadow: 0.3em 0.3rem 0.3rem black;
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
