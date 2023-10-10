import React, { useState } from "react";
import {
  BookmarkContainer,
  Container,
  DropDownContainer,
  Add,
} from "./DisplayBookmark.style";
import { StyledLink } from "@/styles";

export const DisplayBookmark = () => {
  const [toogleDropDown, setToogleDropDown] = useState(false);
  return (
    <Container
      onMouseEnter={() => setToogleDropDown(true)}
      onMouseLeave={() => setToogleDropDown(false)}
    >
      <StyledLink target='blank' href={"https://facebook.com"}>
        <BookmarkContainer>FACEBOOK</BookmarkContainer>
      </StyledLink>
      {toogleDropDown && (
        <DropDownContainer>
          <Add>Add url</Add>
          <Add>Add Todo</Add>
          <Add>Remove</Add>
        </DropDownContainer>
      )}
    </Container>
  );
};
