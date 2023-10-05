import React, { FC } from "react";
import { Container } from "./DisplayBookmarks.style";
import { DisplayBookmark } from "@/components";

export const DisplayBookmarks: FC = () => {
  return (
    <Container>
      <DisplayBookmark /> <DisplayBookmark /> <DisplayBookmark />{" "}
      <DisplayBookmark /> <DisplayBookmark /> <DisplayBookmark />{" "}
      <DisplayBookmark /> <DisplayBookmark /> <DisplayBookmark />{" "}
      <DisplayBookmark /> <DisplayBookmark /> <DisplayBookmark />{" "}
      <DisplayBookmark />
    </Container>
  );
};
