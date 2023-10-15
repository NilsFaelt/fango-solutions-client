import React, { FC, useContext } from "react";
import { Container } from "./DisplayBookmarks.style";
import { DisplayBookmark } from "@/components";
import { useBookmarks, useIdToken } from "@/hooks";
import { BookmarkInterface } from "@/types/bookmark";
import { Spinner } from "@/ui";
import { SpinnerWrapperCenter } from "@/styles";

interface Props {
  idToken: string;
}
export const DisplayBookmarks: FC<Props> = ({ idToken }) => {
  const { data, isLoading } = useBookmarks(idToken);

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
