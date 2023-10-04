import React, { FC } from "react";
import { Container } from "./BookmarkView.style";
import { DisplayBookmarks } from "..";

export const BookmarkView: FC = () => {
  return (
    <Container>
      <DisplayBookmarks />
    </Container>
  );
};
