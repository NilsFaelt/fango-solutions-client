import { mediaQueries, theme } from "@/styles";
import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  padding: 1rem;
  z-index: 6;
  box-sizing: border-box;
  @media (max-width: ${mediaQueries.mobile}) {
    flex-direction: column-reverse;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 7;
  width: clamp(300px, 80vw, 50rem);
  height: 80vh;
  background-color: black;
  border-radius: 0.5rem;
  border: 0.05rem solid white;
  box-shadow: 0.05rem 0.05rem 0.05rem white;
  padding: 1rem;
  @media (max-width: ${mediaQueries.mobile}) {
    height: 60vh;
  }
`;
export const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
  height: 100%;
  gap: 1rem;
`;
export const DisplayPreviewContentContainer = styled.div`
  min-width: 10rem;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  border: 0.05rem solid white;
  padding: 1rem;
  border-radius: 0.5rem;
  @media (max-width: ${mediaQueries.mobile}) {
    width: clamp(300px, 80vw, 50rem);
    height: 10vh;
  }
`;
export const StyledInput = styled.input`
  height: 94%;
  display: flex;
  background-color: black;
  resize: none;
  border: none;
  color: white;
  text-align: center;

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
`;
