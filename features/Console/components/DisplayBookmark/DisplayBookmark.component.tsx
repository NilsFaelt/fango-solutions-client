import React from "react";
import {
  BookMarkTitle,
  BookmarkContainer,
  Container,
} from "./DisplayBookmark.style";
import { StyledLink } from "@/styles";

export const DisplayBookmark = () => {
  return (
    <Container>
      <StyledLink target='blank' href={"https://facebook.com"}>
        <BookmarkContainer>
          <BookMarkTitle>FACEBOOK</BookMarkTitle>
        </BookmarkContainer>
      </StyledLink>
    </Container>
  );
};
