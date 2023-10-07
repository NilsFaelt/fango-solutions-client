import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    transition: 0.3s;

    transform: scale(1.05);
  }
`;

export const SvgImage = styled(Image)``;
