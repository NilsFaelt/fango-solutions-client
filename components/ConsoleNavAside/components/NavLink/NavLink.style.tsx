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
    text-decoration: underline 0.05rem white;
  }
`;

export const SvgImage = styled(Image)``;
