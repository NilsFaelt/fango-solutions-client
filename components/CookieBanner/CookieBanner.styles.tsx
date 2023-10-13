import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 5;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  width: clamp(300px, 30vw, 800px);
  height: auto;
  padding: calc(2vw + 2rem);
  border: solid 0.05rem white;
  box-shadow: 0.1rem 0.1rem 0.1rem grey;
  background-color: white;
  gap: 1rem;
  @media (max-width: 950px) {
    width: auto;
    background-color: white;
    right: 1rem;
  }
`;

export const Title = styled.h4`
  color: black;
  font-size: 1.3rem;
  margin: 0;
`;

export const Button = styled.button`
  min-width: 130px;
  margin-top: 1rem;
  cursor: pointer;
  background-color: black;
  border: 0.1rem solid white;
  color: white;
  /* border-radius: 1rem; */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 1rem;

  /* &:hover {
    transition: 0.3s;
    box-shadow: 0 0 15px white;
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  } */
`;
