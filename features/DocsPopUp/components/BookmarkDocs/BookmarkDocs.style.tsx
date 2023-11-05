import { theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1rem;
  overflow: scroll;
  padding-bottom: 3rem;
`;
export const Title = styled.h5`
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  margin: 0;
`;
export const Text = styled.h5`
  font-size: 0.85rem;

  color: white;
  margin: 0;
`;
export const TitleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: solid white 0.05rem;
`;
