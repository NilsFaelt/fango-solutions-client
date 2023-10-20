import React, { FC, useState } from "react";
import {
  BookmarkContainer,
  Container,
  DropDownContainer,
  DropDownChildren,
  DropUpContainer,
  StyledA,
  InnerDropUpContainer,
  SvgImage,
  DeleteContainer,
  DeleteConfirmButton,
  StyledImage,
} from "./DisplayBookmark.style";
import { StyledLink } from "@/styles";

import { useMutateDeleteBookmark } from "@/hooks";
import { BookmarkInterface } from "@/types/bookmark";
import {
  extractChildPathFromURL,
  extractMainPathUrl,
} from "@/features/Bookmark/utils";
import { checkForFavicon, getFaviconUrl } from "./utils";

interface Props {
  bookmark: BookmarkInterface;
  token: string;
}
export const DisplayBookmark: FC<Props> = ({ bookmark, token }) => {
  const [toogleDropDown, setToogleDropDown] = useState(false);
  const [toogleDeleteContainer, setToogleDeleteContainer] = useState(false);
  const faviconUrl = getFaviconUrl(bookmark.url);

  const primaryUrlName = extractMainPathUrl(bookmark?.url);
  const { mutate } = useMutateDeleteBookmark(token, bookmark?.id);
  const openDeleteContainerOnClick = () => {
    setToogleDeleteContainer(!toogleDeleteContainer);
  };
  const handelDeleteOnClick = () => {
    mutate();
  };
  const { children } = bookmark;

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
          <InnerDropUpContainer>
            <DropDownChildren onClick={openDeleteContainerOnClick}>
              <SvgImage
                width={17}
                height={17}
                alt='cogwheel'
                src={"/svg/trash.svg"}
              />
            </DropDownChildren>
            <DropDownChildren>
              <SvgImage
                width={25}
                height={25}
                alt='cogwheel'
                src={"/svg/cogwheel.svg"}
              />
            </DropDownChildren>
          </InnerDropUpContainer>
        </DropUpContainer>
      )}
      <StyledLink target='blank' href={bookmark?.url}>
        <BookmarkContainer>
          <StyledImage
            width={30}
            height={30}
            src={faviconUrl ? faviconUrl : "/svg/logga.png"}
          />
          {primaryUrlName?.toUpperCase()}{" "}
        </BookmarkContainer>
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
        </DropDownContainer>
      )}
    </Container>
  );
};
