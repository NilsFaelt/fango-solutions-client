import Link from "next/link";
import { styled } from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const StyledLinkBlack = styled(Link)`
  text-decoration: none;
  color: black;
  text-decoration: underline;
`;

export const PrimaryInput = styled.input<{ $width?: string }>`
  width: ${(props) => (props.$width ? props.$width : "15rem")};
  height: 2rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 0.05rem solid black;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
export const PrimaryLabel = styled.label`
  color: white;
  font-size: calc(0.5rem + 0.8vw);
`;

export const SpinnerWrapperCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
