import React, { FC, useState } from "react";
import {
  BookmarkContainer,
  Container,
  DropDownContainer,
  Add,
} from "./DisplayBookmark.style";
import { StyledLink } from "@/styles";
import { extractUrlMainName } from "@/features/Bookmark/utils";
import { useMutateDeleteBookmark } from "@/hooks";

interface Props {
  bookmark: { url: string; id: string };
  token: string;
}
export const DisplayBookmark: FC<Props> = ({ bookmark, token }) => {
  const [toogleDropDown, setToogleDropDown] = useState(false);
  const primaryUrlName = extractUrlMainName(bookmark?.url);
  const { mutate } = useMutateDeleteBookmark(token, bookmark?.id);
  const handelDeleteOnClick = () => {
    mutate();
    console.log("delete");
  };
  if (!bookmark?.url) return null;
  return (
    <Container
      onMouseEnter={() => setToogleDropDown(true)}
      onMouseLeave={() => setToogleDropDown(false)}
    >
      <StyledLink target='blank' href={bookmark?.url}>
        <BookmarkContainer>{primaryUrlName?.toUpperCase()}</BookmarkContainer>
      </StyledLink>
      {toogleDropDown && (
        <DropDownContainer>
          <Add>Update</Add>
          <Add>Add Todo</Add>
          <Add
            onClick={(e) => {
              e.preventDefault();
              handelDeleteOnClick();
            }}
          >
            Remove
          </Add>
        </DropDownContainer>
      )}
    </Container>
  );
};
