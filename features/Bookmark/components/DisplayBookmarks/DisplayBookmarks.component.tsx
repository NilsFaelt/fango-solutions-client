import React, { FC } from "react";
import { Container } from "./DisplayBookmarks.style";
import { DisplayBookmark } from "@/components";
import { useBookmarks } from "@/hooks";
import { BookmarkInterface } from "@/types/bookmark";
import { Spinner } from "@/ui";
import { SpinnerWrapperCenter } from "@/styles";

interface Props {
  token: string;
}
export const DisplayBookmarks: FC<Props> = ({ token }) => {
  const { data, isLoading } = useBookmarks(token);

  if (isLoading)
    return (
      <SpinnerWrapperCenter>
        <Spinner />
      </SpinnerWrapperCenter>
    );
  if (!data) return null;

  return (
    <Container>
      {data?.map((bookmark: BookmarkInterface, i: number) => {
        return <DisplayBookmark key={i} bookmark={bookmark} token={token} />;
      })}
    </Container>
  );
};
