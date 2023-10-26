import React, { FC, useContext, useEffect, useRef, useState } from "react";
import {
  CenterContainer,
  CloseButton,
  Container,
  ContentPreviewTitle,
  DisplayPreviewContentContainer,
  Header,
  OuterContainer,
  StyledInput,
  TextInputArea,
  SpinnerWrapper,
  SavedText,
  ExtrasContainer,
  MarkButton,
} from "./ContentDisplay.style";
import { BookmarkContext, MenuContext } from "@/context";
import {
  useBookMarkById,
  useGetContent,
  useGetContentById,
  useMutateAddContent,
  useMutatePatchContent,
} from "@/hooks";
import { MainTitle, PrimaryButton, Spinner } from "@/ui";
import { extractMainPathUrl } from "@/features/Bookmark/utils";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { StyledImage } from "@/components/DisplayBookmark/DisplayBookmark.style";

interface Props {
  idToken: string;
}

export const ContentDisplay: FC<Props> = ({ idToken }) => {
  const [saved, setSaved] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setId] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState(false);
  const { toogleContentDisplay, setToogleContentDisplay } =
    useContext(MenuContext);
  const { bookmarkId } = useContext(BookmarkContext);
  const { data: bookmark } = useBookMarkById(idToken, bookmarkId);
  const { data: contentData } = useGetContent(idToken, bookmarkId);
  const { data: singleContentData } = useGetContentById(idToken, id);
  const { mutateAsync: patchAsync, isLoading } = useMutatePatchContent(
    idToken,
    id,
    {
      title,
      text: content,
      todo,
    }
  );
  const mainUrl = extractMainPathUrl(bookmark?.url);

  const { mutateAsync, isLoading: isLoadingAdd } = useMutateAddContent(
    idToken,
    bookmarkId,
    {
      title,
      text: content,
      todo,
    }
  );
  const handleCloseOnClick = () => {
    setToogleContentDisplay(false);
    setContent("");
    setTitle("");
    setId("");
    setTodo(false);
  };
  const handleUpsertContentOnClick = () => {
    if (!id) {
      mutateAsync()
        .then(() => {
          setSaved(true);
          console.log("sucess");
        })
        .catch((err) => {
          console.log("buhuu");
        });
    }
    if (id) {
      patchAsync()
        .then(() => {
          setSaved(true);
          console.log("sucess");
        })
        .catch((err) => {
          console.log("buhuu");
        });
    }
  };
  useEffect(() => {
    if (singleContentData?.text) {
      setContent(singleContentData?.text);
      setTitle(singleContentData?.title);
      if (singleContentData?.todo === false || singleContentData?.todo)
        setTodo(singleContentData?.todo);
    }
  }, [singleContentData]);
  if (!toogleContentDisplay) return null;
  return (
    <OuterContainer onClick={() => setSaved(false)}>
      <Container>
        <Header>
          <MainTitle
            text={mainUrl ? mainUrl : " Not Found"}
            underText='Content Editor'
          />
          <StyledInput
            placeholder='ADD TITLE'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <CloseButton onClick={handleCloseOnClick}>CLOSE</CloseButton>
        </Header>
        <CenterContainer>
          <SpinnerWrapper>
            {isLoading || (isLoadingAdd && <Spinner />)}
            {saved && <SavedText>Saved</SavedText>}
          </SpinnerWrapper>
          <TextInputArea
            value={content}
            placeholder='START EDIT'
            onChange={(e) => setContent(e.target.value)}
          />
        </CenterContainer>
        <ExtrasContainer>
          {!todo && (
            <MarkButton onClick={() => setTodo(true)}>MARK AS TODO </MarkButton>
          )}
          {todo && (
            <MarkButton onClick={() => setTodo(true)}>MARK AS DONE</MarkButton>
          )}
          {todo && <StyledImage src='/svg/writingpad.svg' width={20} />}
        </ExtrasContainer>
        <PrimaryButton
          text='SAVE CHANGES'
          onClick={(e) => {
            e.preventDefault();
            handleUpsertContentOnClick();
          }}
        />
      </Container>
      <DisplayPreviewContentContainer>
        {contentData?.map((content, i) => {
          return (
            <ContentPreviewTitle
              onClick={() => {
                setId(content.id);
              }}
              key={i}
            >
              {content.title}
            </ContentPreviewTitle>
          );
        })}
      </DisplayPreviewContentContainer>
    </OuterContainer>
  );
};
