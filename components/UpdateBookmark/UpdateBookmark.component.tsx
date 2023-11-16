import React, { FC, useContext, useEffect, useState } from "react";
import {
  ButtonWrapper,
  Container,
  DisplayUrlWrapper,
  StyledImage,
  StyledA,
  FlexRowContainer,
  FlexCollumnContainer,
} from "./UpdateBookmark.style";
import { useBookMarkById, useMutateDeleteBookmark } from "@/hooks";
import { BookmarkContext, MenuContext } from "@/context";
import { ChildUrls } from "@/types/bookmark";
import { MainText } from "@/ui/display/MainText/MainText.component";
import {
  createAValidUrl,
  extractMainPathUrl,
  shortenString,
  validateUrl,
} from "@/features/Bookmark/utils";
import { ExtraConfirmButton, MainTitle, PrimaryButton } from "@/ui";
import { countTotalTodos } from "./utils";
import { UpdateUrlsPopUp } from "./UpdateUrlsPopUp";

interface Props {
  idToken: string;
}
export const UpdateBookmark: FC<Props> = ({ idToken }) => {
  const { setToogleUpdateBookmark, setToogleContentDisplay } =
    useContext(MenuContext);
  const { bookmarkId } = useContext(BookmarkContext);
  const [childUrls, setChildUrls] = useState<ChildUrls[] | null>(null);
  const [toogleUpdateBookmarkPopUp, setToogleUpdateBookmarkPopUp] =
    useState(false);

  const { mutateAsync } = useMutateDeleteBookmark(idToken, bookmarkId);
  const handleDeleteOnClick = () => {
    mutateAsync()
      .then(() => {
        setToogleUpdateBookmark(false);
      })
      .catch(() => {
        console.log("couldnt delete bookmark");
      });
  };
  const { data } = useBookMarkById(idToken, bookmarkId);
  const todos = data?.content.filter((c) => c.todo && !c.done);
  const totalTodos = countTotalTodos(todos);
  const mainUrl = extractMainPathUrl(data?.url);
  useEffect(() => {
    if (data) {
      const { children } = data;
      setChildUrls(children ? children : null);
    }
  }, [data, idToken]);
  if (!bookmarkId) return null;
  return (
    <Container>
      {toogleUpdateBookmarkPopUp && (
        <UpdateUrlsPopUp
          setTooglePopUp={setToogleUpdateBookmarkPopUp}
          token={idToken}
          id={bookmarkId}
        />
      )}
      <MainTitle text={` ${mainUrl?.toUpperCase()}.COM`} underText='Bookmark' />
      <FlexCollumnContainer>
        <FlexRowContainer>
          <StyledImage
            alt='wrtingpad'
            src={"svg/writingpad.svg"}
            width={15}
            height={15}
          />
          <MainText> todo: {totalTodos}</MainText>
        </FlexRowContainer>
        <PrimaryButton
          text='CONTENT/TODO'
          onClick={() => {
            setToogleContentDisplay(true);
            setToogleUpdateBookmark(false);
          }}
        />
      </FlexCollumnContainer>
      <DisplayUrlWrapper>
        <MainText margin=''>Main Path</MainText>
        <StyledA target='_blank' href={data?.url}>
          {mainUrl}.com
        </StyledA>
      </DisplayUrlWrapper>
      <DisplayUrlWrapper>
        <MainText margin=''>Specfic Paths</MainText>

        {childUrls?.map((child, i) => {
          const shortenedUtl = shortenString(child.url, 40);
          return <ChildUrl key={i} url={shortenedUtl} />;
        })}
      </DisplayUrlWrapper>
      <ButtonWrapper>
        <PrimaryButton
          onClick={() => {
            setToogleUpdateBookmarkPopUp(true);
          }}
          text='UPDATE URLS'
        />
      </ButtonWrapper>
      <ButtonWrapper>
        <ExtraConfirmButton
          onClick={handleDeleteOnClick}
          text='DELETE BOOKAMARK'
        />
      </ButtonWrapper>
    </Container>
  );
};

export const ChildUrl: FC<{ url: string }> = ({ url }) => {
  const validHttpUrl = createAValidUrl(url);
  const isUrl = validateUrl(validHttpUrl);

  return (
    <FlexRowContainer>
      <StyledA target='_blank' href={url} color='green'>
        {url}
      </StyledA>
    </FlexRowContainer>
  );
};
