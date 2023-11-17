"use client";
import React, { FC, useContext, useState } from "react";
import {
  Container,
  ButtonAndInputWrapper,
  ButtonWrapper,
} from "./DisplayBookmarks.style";
import { DisplayBookmark, SpinUpBookmarks } from "@/components";
import { useBookmarks } from "@/hooks";
import { BookmarkInterface } from "@/types/bookmark";
import { AddButton, PrimaryButton, Spinner } from "@/ui";
import { PrimaryInputWhite, SpinnerWrapperCenter } from "@/styles";
import { SlideInContainer } from "@/components/SlideInContainer/SlideInContainer.component";
import { AddBookmark } from "..";

interface Props {
  idToken: string;
  displaySearch?: boolean;
  displayStartAllButton?: boolean;
  limit?: number;
}
export const DisplayBookmarks: FC<Props> = ({
  idToken,
  limit = 100,
  displaySearch = false,
  displayStartAllButton = false,
}) => {
  const [toogleAddBookmarkContainer, setToogleAddBookmarkContainer] =
    useState(false);
  const [searchWord, setSearchWord] = useState("");
  const { data, isLoading } = useBookmarks(idToken, {
    limit,
    skip: 0,
  });

  const filteredData = data?.filter((b) => {
    if (b.url.toLowerCase().includes(searchWord.toLowerCase())) {
      return b;
    }
  });

  if (isLoading)
    return (
      <SpinnerWrapperCenter>
        <Spinner />
      </SpinnerWrapperCenter>
    );
  if (!data) return null;

  return (
    <Container>
      <SlideInContainer
        setToogleContainer={setToogleAddBookmarkContainer}
        toogleContainer={toogleAddBookmarkContainer}
      >
        <AddBookmark
          setToogleAddBookmarkContainer={setToogleAddBookmarkContainer}
          idToken={idToken}
        />
      </SlideInContainer>
      {displayStartAllButton && (
        <ButtonAndInputWrapper>
          <SpinUpBookmarks idToken={idToken} limit={10} />
        </ButtonAndInputWrapper>
      )}
      {displaySearch && (
        <ButtonAndInputWrapper>
          <PrimaryInputWhite
            $width={"calc(6rem + 6vw)"}
            placeholder='Search'
            onChange={(e) => setSearchWord(e.target.value)}
          />
          {/* <IndicateColorText>
            Pink border indicates <br /> incomplete tasks
          </IndicateColorText> */}
          <SpinUpBookmarks idToken={idToken} />
        </ButtonAndInputWrapper>
      )}
      {filteredData?.map((bookmark: BookmarkInterface, i: number) => {
        return <DisplayBookmark key={i} bookmark={bookmark} token={idToken} />;
      })}
      <ButtonWrapper>
        <PrimaryButton
          text='ADD BOOKMARK'
          onClick={() => setToogleAddBookmarkContainer(true)}
        />
      </ButtonWrapper>
    </Container>
  );
};
