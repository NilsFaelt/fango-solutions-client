import { mediaQueries, theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  padding-top: 2rem;
  z-index: 6;
  box-sizing: border-box;
  overflow: scroll;
  @media (max-width: ${mediaQueries.mobile}) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding-top: 5rem;
  }
`;
export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 7;
  width: clamp(300px, 80vw, 50rem);
  height: 80vh;
  background-color: black;
  border-radius: 0.5rem;
  border: 0.05rem solid white;
  box-shadow: 0.3em 0.3rem 0.3rem black;
  padding: 1rem;
  @media (max-width: ${mediaQueries.mobile}) {
    height: 50vh;
  }
`;

export const CenterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
  height: 100%;
  gap: 1rem;
`;
export const ContentPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  box-shadow: 0.3em 0.3rem 0.3rem black;
  /* text-decoration: underline; */
`;
export const InnerLowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  box-shadow: 0.3em 0.3rem 0.3rem black;
  /* background-color: white; */
  /* text-decoration: underline; */
`;
export const ContentPreviewTitle = styled.p`
  color: white;
  font-size: calc(0.7rem + 0.3vw);
  margin: 0;
  cursor: pointer;
  font-family: monospace;
  margin-right: 1rem;
  max-width: 7rem;
  word-wrap: break-word;
  /* text-decoration: underline; */
`;

export const DisplayPreviewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  height: 80vh;
  gap: 0.9rem;
  background-color: black;
  color: white;
  border: 0.05rem solid white;
  padding: 1rem;
  border-radius: 0.7rem;
  overflow: scroll;
  @media (max-width: ${mediaQueries.mobile}) {
    width: clamp(300px, 80vw, 50rem);
    height: 10vh;
  }
`;

export const ExtrasContainer = styled.div`
  display: flex;
  display: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3;
  margin-bottom: 1rem;
  gap: 0rem;
`;
export const ExtraButtonContainer = styled.div`
  display: flex;
  display: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  gap: 1rem;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 7;
`;

export const StyledInput = styled.textarea`
  height: 94%;
  display: flex;
  background-color: black;
  resize: none;
  border: none;
  color: white;
  text-align: center;
  font-family: monospace;
  &:focus {
    outline: none;
  }
`;
export const TextInputArea = styled.textarea`
  width: 100%;
  height: 94%;
  display: flex;
  background-color: black;
  color: white;
  resize: none;
  border: none;

  &:focus {
    outline: none;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
  margin-top: -1.5rem;
`;
export const SavedText = styled.p`
  font-size: calc(0.7rem + 0.3vw);
  font-family: monospace;
  color: ${theme.colors.primary};
`;
export const SvgImage = styled(Image)``;
export const MarkButton = styled.button`
  width: 100%;
  height: 1rem;
  margin-bottom: 1rem;
  background-color: transparent;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
`;
export const AddHighLIghtedContentButton = styled.button`
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 7rem;
  cursor: pointer;
  background-color: black;
  border: 0.1rem solid ${theme.colors.primary};
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 1rem;

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};
    /* background-color: ${theme.colors.extra}; */
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }
  @media (max-width: ${mediaQueries.mobile}) {
    top: 60%;
    left: 50%;
  }
`;
