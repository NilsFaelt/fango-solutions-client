"use client";
import React, { FC, useState } from "react";
import {
  Container,
  IndicateColorText,
  InputWrapper,
} from "./DisplayBookmarks.style";
import { DisplayBookmark } from "@/components";
import { useBookmarks } from "@/hooks";
import { BookmarkInterface } from "@/types/bookmark";
import { Spinner } from "@/ui";
import { PrimaryInput, SpinnerWrapperCenter } from "@/styles";

interface Props {
  token: string;
  displaySearch?: boolean;
  limit?: number;
}
export const DisplayBookmarks: FC<Props> = ({
  token,
  limit = 100,
  displaySearch = false,
}) => {
  const [searchWord, setSearchWord] = useState("");
  const { data, isLoading } = useBookmarks(token, {
    limit,
    skip: 0,
  });
  console.log(data);
  const filteredData = data?.filter((b) => {
    if (b.url.includes(searchWord)) {
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
      {displaySearch && (
        <InputWrapper>
          <PrimaryInput
            $width={"calc(7rem + 5vw)"}
            placeholder='Search'
            onChange={(e) => setSearchWord(e.target.value)}
          />
          {/* <IndicateColorText>
            Pink border indicates <br /> incomplete tasks
          </IndicateColorText> */}
        </InputWrapper>
      )}
      {filteredData?.map((bookmark: BookmarkInterface, i: number) => {
        return <DisplayBookmark key={i} bookmark={bookmark} token={token} />;
      })}
    </Container>
  );
};
