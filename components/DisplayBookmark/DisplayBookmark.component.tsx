import React, { useState } from "react";
import {
  BookMarkTitle,
  BookmarkContainer,
  Container,
  DropDownContainer,
  Add,
} from "./DisplayBookmark.style";
import { StyledLink } from "@/styles";
import { ButtonWithRings } from "@/ui";

export const DisplayBookmark = () => {
  const [toogleDropDown, setToogleDropDown] = useState(false);
  return (
    <Container
      onMouseEnter={() => setToogleDropDown(true)}
      onMouseLeave={() => setToogleDropDown(false)}
    >
      <StyledLink target='blank' href={"https://facebook.com"}>
        <BookmarkContainer>
          <BookMarkTitle>FACEBOOK</BookMarkTitle>
        </BookmarkContainer>
      </StyledLink>
      {toogleDropDown && (
        <DropDownContainer>
          <Add>Add</Add>
          <Add>Add</Add>
          <Add>Add</Add>
        </DropDownContainer>
      )}
    </Container>
  );
};
