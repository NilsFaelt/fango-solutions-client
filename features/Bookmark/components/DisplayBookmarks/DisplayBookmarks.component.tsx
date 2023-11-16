"use client";
import React, { FC, useContext, useState } from "react";
import { Container, ButtonAndInputWrapper } from "./DisplayBookmarks.style";
import { DisplayBookmark, SpinUpBookmarks } from "@/components";
import { useBookmarks } from "@/hooks";
import { BookmarkInterface } from "@/types/bookmark";
import { Spinner } from "@/ui";
import { PrimaryInputWhite, SpinnerWrapperCenter } from "@/styles";
import { BookmarkContext } from "@/context";

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
  // const { bookmarkActive } = useContext(BookmarkContext);
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
    </Container>
  );
};
