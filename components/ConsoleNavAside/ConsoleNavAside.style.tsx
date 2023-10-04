import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 1rem 5rem 1rem;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: calc(8rem + 6vw);
  background-color: black;
  border-right: 0.05rem solid white;
`;
export const InnerLinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
