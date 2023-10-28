import React, { FC, useContext, useRef, useState } from "react";
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
  TodoImageContainer,
} from "./DisplayBookmark.style";
import { StyledLink } from "@/styles";
import {
  useClickOustsideToClose,
  useMutateDeleteBookmark,
  useMutateIncrementClick,
} from "@/hooks";
import { BookmarkInterface } from "@/types/bookmark";
import {
  extractChildPathFromURL,
  extractMainPathUrl,
} from "@/features/Bookmark/utils";
import { getFaviconUrl } from "./utils";
import { BookmarkContext, MenuContext } from "@/context";
import { UpdateBookmark } from "../UpdateBookmark/UpdateBookmark.component";

interface Props {
  bookmark: BookmarkInterface;
  token: string;
}
export const DisplayBookmark: FC<Props> = ({ bookmark, token }) => {
  const { setToogleUpdateBookmark } = useContext(MenuContext);
  const { setBookmarkId } = useContext(BookmarkContext);
  const { setToogleBlacBackgroundDisplay } = useContext(MenuContext);
  const [toogleDropDown, setToogleDropDown] = useState(false);
  const [toogleDeleteContainer, setToogleDeleteContainer] = useState(false);
  const faviconUrl = getFaviconUrl(bookmark.url);
  const ref = useRef(null);

  // useClickOustsideToClose(ref, setToogleBlacBackgroundDisplay);
  useClickOustsideToClose(ref, setToogleDropDown);
  const primaryUrlName = extractMainPathUrl(bookmark?.url);
  const { mutateAsync } = useMutateDeleteBookmark(token, bookmark?.id);
  const { mutateAsync: mutateIncrementClick } = useMutateIncrementClick(
    bookmark.id,
    token
  );

  const openDeleteContainerOnClick = () => {
    setToogleDeleteContainer(!toogleDeleteContainer);
  };
  const handelDeleteOnClick = () => {
    mutateAsync()
      .then(() => {
        setToogleBlacBackgroundDisplay(false);
        setToogleDropDown(false);
      })
      .catch((err) => {
        console.log("could not delete bookmark");
      });
  };
  const handleClick = (url: string) => {
    mutateIncrementClick().then(() => {
      if (toogleDropDown) window.open(url, "_blank");
    });
  };
  const handleUpdateBookmarkClick = (id: string) => {
    setBookmarkId(id);
    setToogleUpdateBookmark(true);
  };
  const { children, content } = bookmark;
  const todos = content?.filter((c) => {
    if (c.todo === true && c.done === false) {
      return c;
    }
  });
  const isTodo = todos.length > 0;
  console.log(todos, content, bookmark);
  if (!bookmark?.url) return null;
  return (
    <Container
      ref={ref}
      $zindex={toogleDropDown ? 4 : 0}
      onClick={() => {
        setToogleDropDown(true);
        setToogleBlacBackgroundDisplay(true);
      }}
      // onMouseLeave={() => {
      //   setToogleDropDown(false);
      //   setToogleDeleteContainer(false);
      // }}
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
                  onClick={() => {
                    setToogleDeleteContainer(false);
                  }}
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
            <DropDownChildren
              onClick={() => handleUpdateBookmarkClick(bookmark.id)}
            >
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
      <StyledLink
        target='_blank'
        onClick={(e) => {
          e.preventDefault();
          handleClick(bookmark?.url);
        }}
        href={bookmark?.url}
      >
        <BookmarkContainer>
          <TodoImageContainer>
            {isTodo && <StyledImage src='/svg/writingpad.svg' width={15} />}
          </TodoImageContainer>
          <StyledImage
            width={30}
            height={30}
            src={faviconUrl ? faviconUrl : "/svg/web.png"}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.src = "/svg/web.svg";
            }}
          />
          {primaryUrlName?.toUpperCase()}
        </BookmarkContainer>
      </StyledLink>
      {toogleDropDown && (
        <DropDownContainer>
          {children?.[0] &&
            children.map((child, i) => {
              const path = extractChildPathFromURL(child.url);
              return (
                <StyledA
                  // href={child.url}
                  // target='_blank'
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(child.url);
                  }}
                  key={i}
                >
                  {path.toUpperCase()}
                </StyledA>
              );
            })}
        </DropDownContainer>
      )}
    </Container>
  );
};
