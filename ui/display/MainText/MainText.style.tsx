import styled from "styled-components";

interface Props {
  fontSize: "8" | "12" | "16" | "24";
  color: "black" | "white";
  $margin: string;
}

export const Text = styled.p<Props>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  margin: ${(props) => props.$margin && `margin: ${props.$margin}px;`};
`;
