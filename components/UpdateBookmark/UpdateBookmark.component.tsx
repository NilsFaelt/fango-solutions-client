import React, { FC, useContext, useEffect, useState } from "react";
import {
  Container,
  DisplayUrlWrapper,
  StyledImage,
  Text,
} from "./UpdateBookmark.style";
import { useBookMarkById } from "@/hooks";
import { BookmarkContext } from "@/context";
import { ChildUrls } from "@/types/bookmark";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { createAValidUrl, validateUrl } from "@/features/Bookmark/utils";

interface Props {
  idToken: string;
}
export const UpdateBookmark: FC<Props> = ({ idToken }) => {
  console.log(idToken, "in update");

  const { bookmarkId } = useContext(BookmarkContext);
  const [childUrls, setChildUrls] = useState<ChildUrls[] | null>(null);

  const { data } = useBookMarkById(idToken, bookmarkId);
  useEffect(() => {
    if (data) {
      const { children } = data;
      setChildUrls(children ? children : null);
    }
  }, [data, idToken]);

  console.log(data, " in update");
  return (
    <Container>
      <DisplayUrlWrapper>
        {childUrls?.map((child, i) => {
          return <ChildUrl key={i} url={child.url} />;
        })}
      </DisplayUrlWrapper>
    </Container>
  );
};

export const ChildUrl: FC<{ url: string }> = ({ url }) => {
  const validHttpUrl = createAValidUrl(url);
  const isUrl = validateUrl(validHttpUrl);

  return (
    <>
      <Text color='green'>{url}</Text>
      {isUrl && (
        <StyledImage
          alt='Green check mark'
          width={12}
          height={12}
          src='/svg/check.svg'
        />
      )}
    </>
  );
};
