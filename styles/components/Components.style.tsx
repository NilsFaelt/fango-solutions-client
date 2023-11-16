import Link from "next/link";
import { keyframes, styled } from "styled-components";
import { mediaQueries } from "../mediaQueries/mediaQueries";
import { theme } from "../theme/theme.style";

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

export const PrimaryInputWhite = styled.input<{ $width?: string }>`
  width: ${(props) => (props.$width ? props.$width : "15rem")};
  min-width: 9rem;
  height: 2rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: 0.07rem solid white;
  @media (max-width: ${mediaQueries.mobile}) {
    min-width: 7rem;
    padding: 0.4rem;
  }
  &::placeholder {
    color: grey;
  }
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
export const PrimaryInput = styled.input<{ $width?: string }>`
  width: ${(props) => (props.$width ? props.$width : "15rem")};
  min-width: 10rem;
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
export const PrimaryLabel = styled.label`
  color: white;
  font-size: 0.8rem;
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
