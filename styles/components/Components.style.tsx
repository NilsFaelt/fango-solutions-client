import Link from "next/link";
import { keyframes, styled } from "styled-components";
import { theme } from "..";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    z-index: 0;
    transform: translateY(-100%);
  }
  30% {
    z-index: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
    z-index: 3;
    transform: translateY(0);
  }
`;
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    z-index: 0;
    transform: translateY(100%);
  }
  30% {
    z-index: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
    z-index: 3;
    transform: translateY(0);
  }
`;

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

export const DropDownContainer = styled.div`
  position: absolute;
  background-color: ${theme.colors.backgroundPrimary};
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  width: 100%;
  z-index: 5;
`;

export const ChartTitle = styled.h5`
  font-size: calc(0.8rem + 4vw);
  color: ${theme.colors.primary};
  height: 1rem;
`;
