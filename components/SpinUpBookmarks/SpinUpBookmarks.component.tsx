import React, { FC, useContext } from "react";
import { Container } from "./SpinUpBookmarks.style";
import { PrimaryButton, Spinner } from "@/ui";
import { useBookmarks } from "@/hooks";
import { BookmarkContext } from "@/context";
interface Props {
  idToken: string;
  limit?: number;
}

export const SpinUpBookmarks: FC<Props> = ({ idToken, limit = 100 }) => {
  const { setBookmarkActive } = useContext(BookmarkContext);
  const { data, isLoading } = useBookmarks(idToken, {
    limit: limit || 100,
    skip: 0,
  });
  const handleClick = () => {
    data?.map((b) => {
      window.open(b.url, "about:blank", "noopener");
    });
  };
  if (isLoading) return <Spinner />;
  if (!data) return null;
  return (
    <Container
      onMouseEnter={() => setBookmarkActive(true)}
      onMouseLeave={() => setBookmarkActive(false)}
    >
      <PrimaryButton onClick={handleClick} text='START ALL' />
    </Container>
  );
};
