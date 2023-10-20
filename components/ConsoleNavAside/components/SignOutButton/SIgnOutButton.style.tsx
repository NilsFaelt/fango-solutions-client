import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`;
export const Button = styled.button`
  color: white;
  border: none;
  background-color: transparent;
  font-size: 0.7rem;
  cursor: pointer;
`;
export const SvgImage = styled(Image)`
  transform: rotate(180deg);
`;
