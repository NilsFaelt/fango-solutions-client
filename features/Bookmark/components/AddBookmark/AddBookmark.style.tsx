import { mediaQueries, theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  gap: 0rem;
  color: white;
  padding-right: 1rem;
  min-height: 30rem;
`;
export const FormContainer = styled.form``;
export const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 16rem;
  gap: 0.5rem;
  margin-top: 1.5rem;
  margin-right: 0.5rem;
  box-sizeing: boreder-box;
  @media (max-width: ${mediaQueries.mobile}) {
    width: 10rem;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const StyledA = styled.a`
  color: ${theme.colors.secondary};
  text-decoration: underline;
  max-width: 16rem;
  word-wrap: break-word;
  font-size: 0.8rem;
  @media (max-width: ${mediaQueries.mobile}) {
    max-width: 10rem;
  }
`;
export const DisplayUrlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
export const StyledImage = styled(Image)`
  margin-left: 1rem;
  margin-bottom: -0.2rem;
`;
export const ButtonInputWrapperCollumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0rem;
  width: 100%;
`;
