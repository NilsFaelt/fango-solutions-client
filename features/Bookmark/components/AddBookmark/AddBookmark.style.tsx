import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 2rem;
  color: white;
  padding-right: 1rem;
`;
export const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 16rem;
`;
export const StyledA = styled.a`
  color: ${theme.colors.secondary};
  text-decoration: underline;
  max-width: 16rem;
  word-wrap: break-word;
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
