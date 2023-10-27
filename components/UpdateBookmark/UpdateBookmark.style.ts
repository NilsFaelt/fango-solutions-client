import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 95%;
  gap: 2rem;
  color: white;
  padding-right: 1.5rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
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
  width: 100%;
`;
export const StyledImage = styled(Image)`
  margin-left: 1rem;
`;
export const StyledA = styled.a`
  color: ${theme.colors.secondary};
  text-decoration: underline;
  max-width: 16rem;
  word-wrap: break-word;
  font-size: 0.8rem;
`;
export const ButtonWrapper = styled.div`
  width: calc(10rem + 10vw);
`;
export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const FlexCollumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
