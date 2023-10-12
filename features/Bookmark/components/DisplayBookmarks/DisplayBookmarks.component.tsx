import React, { FC } from "react";
import { Container } from "./DisplayBookmarks.style";
import { DisplayBookmark } from "@/components";
import { useBookmarks, useIdToken } from "@/hooks";
import { BookmarkInterface } from "@/types/bookmark";
import { Spinner } from "@/ui";
import { SpinnerWrapperCenter } from "@/styles";
interface Data {
  statusCode: number;
}
export const DisplayBookmarks: FC = () => {
  const { data, error, isLoading } = useBookmarks('token ? token :""');

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
        return <DisplayBookmark key={i} url={bookmark?.url} />;
      })}
    </Container>
  );
};
