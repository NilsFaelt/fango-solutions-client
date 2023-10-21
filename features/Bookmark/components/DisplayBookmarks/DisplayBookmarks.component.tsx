"use client";
import React, { FC, useState } from "react";
import { Container, InputWrapper } from "./DisplayBookmarks.style";
import { DisplayBookmark } from "@/components";
import { useBookmarks } from "@/hooks";
import { BookmarkInterface } from "@/types/bookmark";
import { Spinner } from "@/ui";
import { PrimaryInput, SpinnerWrapperCenter } from "@/styles";

interface Props {
  token: string;
}
export const DisplayBookmarks: FC<Props> = ({ token }) => {
  const [searchWord, setSearchWord] = useState("");
  const { data, isLoading } = useBookmarks(token);
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
      <InputWrapper>
        <PrimaryInput
          $width={"calc(7rem + 5vw)"}
          placeholder='Search'
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </InputWrapper>
      {filteredData?.map((bookmark: BookmarkInterface, i: number) => {
        return <DisplayBookmark key={i} bookmark={bookmark} token={token} />;
      })}
    </Container>
  );
};
