import Link from "next/link";
import { styled } from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const PrimaryInput = styled.input`
  width: 15rem;
  height: 2rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  border-radius: 1rem;
  border: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
export const PrimaryLabel = styled.label`
  color: white;
  font-size: calc(0.8rem + 0.8vw);
`;
