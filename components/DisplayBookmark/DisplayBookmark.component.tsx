import React, { FC, useState } from "react";
import {
  BookmarkContainer,
  Container,
  DropDownContainer,
  DropDownChildren,
  DropUpContainer,
  StyledA,
  UpdateWrapper,
  SvgImage,
  DeleteContainer,
  DeleteConfirmButton,
} from "./DisplayBookmark.style";
import { StyledLink } from "@/styles";
import {
  extractChildPathFromURL,
  extractUrlMainName,
} from "@/features/Bookmark/utils";
import { useMutateDeleteBookmark } from "@/hooks";
import { BookmarkInterface } from "@/types/bookmark";
import { StyledImage } from "../ProfileCard/ProfileCard.style";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { ButtonWithRings } from "@/ui";

interface Props {
  bookmark: BookmarkInterface;
  token: string;
}
export const DisplayBookmark: FC<Props> = ({ bookmark, token }) => {
  const [toogleDropDown, setToogleDropDown] = useState(false);
  const [toogleDeleteContainer, setToogleDeleteContainer] = useState(false);
  const primaryUrlName = extractUrlMainName(bookmark?.url);
  const { mutate } = useMutateDeleteBookmark(token, bookmark?.id);
  const openDeleteContainerOnClick = () => {
    setToogleDeleteContainer(!toogleDeleteContainer);
  };
  const handelDeleteOnClick = () => {
    mutate();
  };
  const { children } = bookmark;
  const isChildren = children?.[0];

  if (!bookmark?.url) return null;
  return (
    <Container
      onMouseEnter={() => setToogleDropDown(true)}
      onMouseLeave={() => {
        setToogleDropDown(false);
        setToogleDeleteContainer(false);
      }}
    >
      {toogleDropDown && (
        <DropUpContainer>
          <UpdateWrapper>
            <DropDownChildren>
              <SvgImage
                width={25}
                height={25}
                alt='cogwheel'
                src={"/svg/cogwheel.svg"}
              />
            </DropDownChildren>
          </UpdateWrapper>
        </DropUpContainer>
      )}
      <StyledLink target='blank' href={bookmark?.url}>
        <BookmarkContainer>{primaryUrlName?.toUpperCase()}</BookmarkContainer>
      </StyledLink>
      {toogleDropDown && (
        <DropDownContainer>
          {children?.[0] &&
            children.map((child, i) => {
              const path = extractChildPathFromURL(child.url);
              return (
                <StyledA href={child.url} target='_blank' key={i}>
                  {path.toUpperCase()}
                </StyledA>
              );
            })}
          <DropDownChildren onClick={openDeleteContainerOnClick}>
            DELETE
          </DropDownChildren>
          {toogleDeleteContainer && (
            <DeleteContainer>
              <DeleteConfirmButton onClick={handelDeleteOnClick}>
                <SvgImage
                  width={15}
                  height={15}
                  alt='cogwheel'
                  src={"/svg/check.svg"}
                />
              </DeleteConfirmButton>
              <DeleteConfirmButton
                onClick={() => setToogleDeleteContainer(false)}
              >
                <SvgImage
                  width={15}
                  height={15}
                  alt='cogwheel'
                  src={"/svg/cross.svg"}
                />
              </DeleteConfirmButton>
            </DeleteContainer>
          )}
        </DropDownContainer>
      )}
    </Container>
  );
};
