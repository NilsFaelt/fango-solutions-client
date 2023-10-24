import React, { FC, useContext, useRef, useState } from "react";
import {
  CenterContainer,
  CloseButton,
  Container,
  DisplayPreviewContentContainer,
  Header,
  OuterContainer,
  StyledInput,
  TextInputArea,
} from "./ContentDisplay.style";
import { BookmarkContext, MenuContext } from "@/context";
import { useBookMarkById } from "@/hooks";
import { ButtonWithRings, MainTitle, PrimaryButton } from "@/ui";
import { extractMainPathUrl, stripExtraPaths } from "@/features/Bookmark/utils";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { PrimaryInput } from "@/styles";

interface Props {
  idToken: string;
}

export const ContentDisplay: FC<Props> = ({ idToken }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { toogleContentDisplay, setToogleContentDisplay } =
    useContext(MenuContext);
  const { bookmarkId } = useContext(BookmarkContext);
  const { data: bookmark } = useBookMarkById(idToken, bookmarkId);
  const mainUrl = extractMainPathUrl(bookmark?.url);
  console.log(title, content);
  if (!toogleContentDisplay) return null;
  return (
    <OuterContainer>
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
          <CloseButton onClick={() => setToogleContentDisplay(false)}>
            CLOSE
          </CloseButton>
        </Header>
        <CenterContainer>
          <TextInputArea
            value={content}
            placeholder='START EDIT'
            onChange={(e) => setContent(e.target.value)}
          />
        </CenterContainer>
        <PrimaryButton text='SAVE CHANGES' />
      </Container>
      <DisplayPreviewContentContainer />
    </OuterContainer>
  );
};
