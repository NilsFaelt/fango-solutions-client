import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 20rem;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem black;
`;
export const InnerUpperContainer = styled.div<{ imageurl: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 40%;
  background-color: #270014;
  border-radius: 1rem 1rem 0rem 0rem;
  box-shadow: 0.5rem, 0.5rem, 0.5rem black;
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(0px);
`;
export const InnerLowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  background-color: #5a002e;
  border-radius: 0rem 0rem 1rem 1rem;
  box-shadow: 0.5rem, 0.5rem, 0.5rem black;
`;
export const StyledImage = styled.img`
  z-index: 1;
  position: absolute;
  object-fit: cover;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  border: 0.25rem solid #5a002e;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;
export const Name = styled.h4`
  text-align: center;
  font-size: 1.2rem;
  color: white;
  margin: 0;
  margin-top: 2rem;
`;
export const InfoText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: white;
  margin: 0;
`;
