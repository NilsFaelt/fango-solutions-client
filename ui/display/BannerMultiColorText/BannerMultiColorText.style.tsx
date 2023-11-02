import { theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-height: 5rem;
  padding: 1rem;
  /* background: linear-gradient(
    to left,
    rgba(216, 234, 255, 0.1),
    rgba(0, 0, 0, 1)
  ); */
  border: solid 0.05rem white;
  border-radius: 0.5rem;
  box-sizing: border-box;
`;
export const Text = styled.h5<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 1.5rem;
  margin: 0;
  margin-left: 1rem;
`;
