import { mediaQueries, theme } from "@/styles";
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
  justify-content: flex-start;
  gap: 1rem;
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
  @media (max-width: ${mediaQueries.mobile}) {
    width: 10rem;
    padding-left: 1rem;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 3rem;
  width: 16rem;
  align-self: center;
  @media (max-width: ${mediaQueries.mobile}) {
    width: 11rem;
    padding-left: 1rem;
  }
`;
export const PrimaryInput = styled.input<{ $width?: string }>`
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 0.05rem solid black;
  border-bottom: 0.05rem solid ${theme.colors.primary};
  color: white;
  background-color: black;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
