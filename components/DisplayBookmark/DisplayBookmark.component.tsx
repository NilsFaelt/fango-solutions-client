import React, { FC, useState } from "react";
import {
  BookmarkContainer,
  Container,
  DropDownContainer,
  Add,
} from "./DisplayBookmark.style";
import { StyledLink } from "@/styles";
import { extractUrlMainName } from "@/features/Bookmark/utils";

interface Props {
  url: string;
}
export const DisplayBookmark: FC<Props> = ({ url }) => {
  const [toogleDropDown, setToogleDropDown] = useState(false);
  const primaryUrlName = extractUrlMainName(url);
  if (!url) return null;
  return (
    <Container
      onMouseEnter={() => setToogleDropDown(true)}
      onMouseLeave={() => setToogleDropDown(false)}
    >
      <StyledLink target='blank' href={url}>
        <BookmarkContainer>{primaryUrlName?.toUpperCase()}</BookmarkContainer>
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
