import styled from "styled-components";

interface Props {
  fontsize: "12" | "16" | "24";
  color: "black" | "white";
}

export const Text = styled.p<Props>`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`;
