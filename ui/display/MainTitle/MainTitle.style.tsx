import { theme } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 3;
`;
export const Title = styled.h2`
  font-size: calc(1rem + 1vw);
  color: white;
  margin: 0;
`;
export const UnderText = styled.p`
  font-size: calc(0.6rem + 0.6vw);
  color: ${theme.colors.secondary};
  margin: 0;
`;
