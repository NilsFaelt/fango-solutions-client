import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const Container = styled.form`
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
  background-color: rgba(0, 0, 0, 0.5);
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  padding: 2.5rem 5rem 5rem 5rem;
  z-index: 1000;
  box-shadow: 0.3em 0.3rem 0.3rem black;
  transition: 1s;
  @media (max-width: ${mediaQueries.mobile}) {
    padding: 2.5rem 3rem 5rem 3rem;
    top: 340%;
    left: 50%;
  }
  &:hover {
    transition: 1s;
    background-color: rgba(0, 0, 0, 1);
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
