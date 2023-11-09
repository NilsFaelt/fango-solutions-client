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
  ExtraButtonContainer,
  MarkButton,
  ContentPreviewContainer,
  AddHighLIghtedContentButton,
  InnerLowerContainer,
} from "./ContentDisplay.style";
import { BookmarkContext, MenuContext } from "@/context";
import {
  useBookMarkById,
  useGetContent,
  useGetContentById,
  useMutateAddContent,
  useMutateDeleteContent,
  useMutatePatchContent,
} from "@/hooks";
import { ExtraConfirmButton, MainTitle, PrimaryButton, Spinner } from "@/ui";
import { extractMainPathUrl } from "@/features/Bookmark/utils";

import { StyledImage } from "@/components/DisplayBookmark/DisplayBookmark.style";
import { extractFirstWordsString } from "../../utils";

interface Props {
  idToken: string;
}

export const ContentDisplay: FC<Props> = ({ idToken }) => {
  const { setToogleBlacBackgroundDisplay } = useContext(MenuContext);
  const [saved, setSaved] = useState(false);
  const [title, setTitle] = useState("");
  const [highligtedTodoTitle, setHighligtedTodoTitle] = useState("");
  const [id, setId] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [highLigtedContent, setHighlightedContent] = useState("");
  const [todo, setTodo] = useState(false);
  const [highLigtedTodo, sethighLigtedTodoHighLigtedTodo] = useState(false);
  const [done, setDone] = useState(false);
  const { toogleContentDisplay, setToogleContentDisplay } =
    useContext(MenuContext);
  const { bookmarkId } = useContext(BookmarkContext);
  const { data: bookmark } = useBookMarkById(idToken, bookmarkId);
  const { data: contentData } = useGetContent(idToken, bookmarkId);
  const { data: singleContentData } = useGetContentById(idToken, id);

  const [highlightedText, setHighlightedText] = useState<string>("");

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection) {
        const selectedText = selection.toString();
        if (selectedText) {
          setHighlightedText(selectedText);
          setHighligtedTodoTitle(extractFirstWordsString(selectedText));
          setHighlightedContent(selectedText);
          sethighLigtedTodoHighLigtedTodo(true);
        }
      }
    };

    document.addEventListener("mouseup", handleSelectionChange);

    return () => {
      document.removeEventListener("mouseup", handleSelectionChange);
    };
  }, []);

  const { mutateAsync: deleteMutateAsync, isLoading: deleteIsLoading } =
    useMutateDeleteContent(idToken, id);
  const { mutateAsync: patchAsync, isLoading } = useMutatePatchContent(
    idToken,
    id,
    {
      title,
      text: content,
      todo,
      done,
    }
  );
  const mainUrl = extractMainPathUrl(bookmark?.url);

  const { mutateAsync, isLoading: isLoadingAdd } = useMutateAddContent(
    idToken,
    bookmarkId,
    {
      title: title ? title : "Comment",
      text: content,
      todo,
    }
  );
  const {
    mutateAsync: mutateHighlightedAsync,
    isLoading: isLoadingHighlighted,
  } = useMutateAddContent(idToken, bookmarkId, {
    title: highligtedTodoTitle,
    text: highLigtedContent,
    todo: highLigtedTodo,
  });
  const handleCloseOnClick = () => {
    setToogleBlacBackgroundDisplay(false);
    setToogleContentDisplay(false);
    setContent("");
    setTitle("");
    setId("");
    setTodo(false);
    setDone(false);
  };
  const createNewOnCLick = () => {
    setContent("");
    setTitle("");
    setId("");
    setTodo(false);
    setDone(false);
  };
  const deleteOnCLick = () => {
    deleteMutateAsync()
      .then(() => {
        setContent("");
        setTitle("");
        setId("");
        setTodo(false);
        setDone(false);
      })
      .catch((err) => {
        console.log("could not delete content");
      });
  };
  const handleUpsertContentOnClick = () => {
    if (title) {
      if (!id) {
        mutateAsync()
          .then(() => {
            setSaved(true);
            setContent("");
            setTitle("");
          })
          .catch((err) => {});
      }
      if (id) {
        patchAsync()
          .then(() => {
            setSaved(true);
          })
          .catch((err) => {});
      }
    }
  };
  const handleInsertHighlightedContentOnClick = () => {
    mutateHighlightedAsync()
      .then(() => {
        setSaved(true);
        setHighlightedContent("");
        setHighligtedTodoTitle("");
      })
      .then(() => {
        setHighlightedContent("");
      })
      .catch((err) => {});
  };

  useEffect(() => {
    if (singleContentData?.text) {
      setContent(singleContentData?.text);
      setTitle(singleContentData?.title);
      if (singleContentData?.todo === false || singleContentData?.todo)
        setTodo(singleContentData?.todo);
      if (singleContentData?.done) setDone(singleContentData?.done);
    }
  }, [singleContentData]);

  useEffect(() => {
    setHighlightedContent("");
  }, [content, title]);
  if (!toogleContentDisplay) return null;
  return (
    <OuterContainer onClick={() => setSaved(false)}>
      {highLigtedContent && (
        <AddHighLIghtedContentButton
          onClick={handleInsertHighlightedContentOnClick}
        >
          ADD TODO
        </AddHighLIghtedContentButton>
      )}
      <Container
        onSubmit={(e) => {
          e.preventDefault();
          handleUpsertContentOnClick();
        }}
      >
        <Header>
          <MainTitle
            text={mainUrl ? mainUrl : " Not Found"}
            underText='Content Editor'
          />
          <StyledInput
            placeholder='ADD TITLE'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />

          <CloseButton onClick={handleCloseOnClick}>CLOSE</CloseButton>
        </Header>
        <CenterContainer>
          <SpinnerWrapper>
            {deleteIsLoading && <Spinner />}
            {isLoading || (isLoadingAdd && <Spinner />)}
            {saved && <SavedText>Saved</SavedText>}
          </SpinnerWrapper>
          <TextInputArea
            value={content}
            placeholder='START EDIT'
            onChange={(e) => setContent(e.target.value)}
          />
        </CenterContainer>
        <InnerLowerContainer>
          <ExtrasContainer>
            {!todo && (
              <MarkButton onClick={() => setTodo(true)}>
                MARK AS TODO{" "}
              </MarkButton>
            )}
            {todo && (
              <MarkButton
                onClick={() => {
                  setDone(false);
                  setTodo(false);
                }}
              >
                REMOVE TODO{" "}
              </MarkButton>
            )}
            {todo && !done && (
              <MarkButton onClick={() => setDone(true)}>
                MARK AS DONE{" "}
              </MarkButton>
            )}

            {done && <StyledImage src='/svg/check.svg' width={18} />}
            {todo && !done && (
              <StyledImage src='/svg/writingpad.svg' width={20} />
            )}
          </ExtrasContainer>
          <PrimaryButton text='SAVE CHANGES' />
          {id && (
            <ExtraButtonContainer>
              <ExtraConfirmButton
                text='CREATE NEW'
                onClick={(e) => {
                  e.preventDefault(), createNewOnCLick();
                }}
              />
              <ExtraConfirmButton
                text='DELETE'
                onClick={(e) => {
                  e.preventDefault(), deleteOnCLick();
                }}
              />
            </ExtraButtonContainer>
          )}
        </InnerLowerContainer>
      </Container>
      <DisplayPreviewContentContainer>
        {contentData?.map((content, i) => {
          return (
            <ContentPreviewContainer key={i}>
              <ContentPreviewTitle
                onClick={() => {
                  setTodo(false);
                  setDone(false);
                  setId(content.id);
                }}
              >
                {content.title}
              </ContentPreviewTitle>
              {content.done && <StyledImage src='/svg/check.svg' width={18} />}
              {content.todo && !content.done && (
                <StyledImage src='/svg/writingpad.svg' width={20} />
              )}
            </ContentPreviewContainer>
          );
        })}
      </DisplayPreviewContentContainer>
    </OuterContainer>
  );
};
