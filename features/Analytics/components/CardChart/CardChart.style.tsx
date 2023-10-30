import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div<{ $backgroundcolor: string }>`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 10rem;
  min-width: 13rem;
  border-radius: 0.5rem;
  border: solid 0.05rem white;
  background-color: ${(props) => props.$backgroundcolor};
  box-sizeing: border-box;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  gap:1rem;,
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  background-color: black;
`;
export const StyledImage = styled(Image)``;
export const Title = styled.h5`
  font-size: 1.8rem;
  margin: 0;
  color: white;
`;
// export const StyledImage = styled(Image)``;
