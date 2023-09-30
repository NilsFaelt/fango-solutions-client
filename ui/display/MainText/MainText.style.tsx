import styled from "styled-components";

interface Props {
  fontSize: "12" | "16" | "24";
  color: "black" | "white";
}

export const Text = styled.p<Props>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;
