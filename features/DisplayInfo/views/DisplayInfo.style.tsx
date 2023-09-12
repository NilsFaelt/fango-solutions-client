import { mediaQueries } from "@/styles";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin-left: 13rem;
  margin-right: 13rem;
  margin-bottom: 20rem;
  margin-top: 3rem;
  @media (max-width: ${mediaQueries.tablet}) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;
export const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  margin-bottom: 5rem;
  margin-top: 3rem;
  gap: 2rem;
  @media (max-width: ${mediaQueries.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 0rem;
    margin-bottom: 0rem;
  }
`;
export const StyledImage = styled.img`
  margin-top: 3rem;
  width: calc(20rem + 8vw);
  border-radius: 1rem;
`;
export const Text = styled.p`
  color: white;
  text-align: center;
`;
