import React, { FC } from "react";
import { Container } from "./BookmarkView.style";
import { DisplayBookmarks } from "..";
import { NavBarExtras } from "@/components";
import { AddButton, PrimaryButton } from "@/ui";

export const BookmarkView: FC = () => {
  return (
    <Container>
      <DisplayBookmarks />
      <NavBarExtras>
        <AddButton />
      </NavBarExtras>
    </Container>
  );
};
