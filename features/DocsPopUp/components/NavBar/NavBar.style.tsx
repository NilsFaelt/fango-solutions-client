import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  left: 0;
  height: 100%;
  width: clamp(10rem, 20%, 20rem);
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  background-color: black;
  box-sizing: border-box;
  padding-top: 3rem;
`;

export const NavBarButton = styled.button`
  font-size: 0.8rem;
  font-weight: bold;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;
