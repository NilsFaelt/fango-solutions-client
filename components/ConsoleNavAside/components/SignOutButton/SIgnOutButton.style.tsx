import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
export const Button = styled.button`
  color: white;
  border: none;
  background-color: transparent;

  cursor: pointer;
`;
export const SvgImage = styled(Image)`
  transform: rotate(180deg);
`;
