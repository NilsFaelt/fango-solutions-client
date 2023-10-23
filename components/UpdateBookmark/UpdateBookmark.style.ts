import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  gap: 2rem;
  color: white;
  padding-right: 1rem;
  min-height: 30rem;
`;

export const StyledInput = styled.input`
  background-color: black;
  color: white;
`;
export const DisplayUrlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
`;
export const StyledImage = styled(Image)`
  margin-left: 1rem;
  margin-bottom: -0.2rem;
`;
export const Text = styled.p`
  color: ${theme.colors.secondary};
  text-decoration: underline;
  max-width: 16rem;
  word-wrap: break-word;
  font-size: 0.8rem;
`;
