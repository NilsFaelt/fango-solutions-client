import React from "react";
import { Container } from "./BookmarkDocs.style";
import { MainTitle } from "@/ui";
import { MainText } from "@/ui/display/MainText/MainText.component";

export const BookmarkDocs = () => {
  return (
    <Container>
      <MainTitle text='BOOKMARK' underText='Documentation' />
      <MainText fontSize='16'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat libero
        sit a maxime officiis consectetur iure facilis enim, quidem, expedita
        laudantium sequi, magni iste eum vero suscipit laborum non explicabo.
      </MainText>
      <MainText fontSize='16'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat libero
        sit a maxime officiis consectetur iure facilis enim, quidem, expedita
        laudantium sequi, magni iste eum vero suscipit laborum non explicabo.
      </MainText>
      <MainText fontSize='16'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat libero
        sit a maxime officiis consectetur iure facilis enim, quidem, expedita
        laudantium sequi, magni iste eum vero suscipit laborum non explicabo.
      </MainText>
    </Container>
  );
};
