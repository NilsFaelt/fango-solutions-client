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
  DougnutContainer,
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
  shortenString,
} from "@/features/Bookmark/utils";
import { getFaviconUrl } from "./utils";
import { BookmarkContext, MenuContext } from "@/context";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

interface Props {
  bookmark: BookmarkInterface;
  token: string;
}
export const DisplayBookmark: FC<Props> = ({ bookmark, token }) => {
  const { setToogleUpdateBookmark } = useContext(MenuContext);
  const { setBookmarkId } = useContext(BookmarkContext);
  const { setToogleBlacBackgroundDisplay, toogleBlacBackgroundDisplay } =
    useContext(MenuContext);
  const [toogleDropDown, setToogleDropDown] = useState(false);
  const [toogleDeleteContainer, setToogleDeleteContainer] = useState(false);
  const faviconUrl = getFaviconUrl(bookmark.url);
  const ref = useRef(null);

  useClickOustsideToClose(ref, setToogleDropDown);
  const primaryUrlName = extractMainPathUrl(bookmark?.url);

  const { mutateAsync } = useMutateDeleteBookmark(token, bookmark?.id);
  const { mutateAsync: mutateIncrementClick } = useMutateIncrementClick(
    bookmark.id,
    token
  );
  console.log(bookmark.id);
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
    if (toogleDropDown)
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
  const allContent = content?.filter((c) => {
    if (c.id) {
      return c;
    }
  });
  const doneTodos = content?.filter((c) => c?.done);
  const isTodo = todos.length > 0;
  const allContentWithZeroAsDefault =
    allContent.length > 0 ? allContent.length : 1;

  // React-chart-data------------------------------------------------------------//
  const data = {
    labels: ["Content", "Todo", "Done"],
    datasets: [
      {
        label: "Content/Todo",
        data: [allContentWithZeroAsDefault, todos.length, doneTodos.length],
        backgroundColor: [
          "rgba(159, 13, 127, 1)",
          "rgba(234, 17, 121, 1)",
          "rgba(125, 222, 114, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  // React-chart-data------------------------------------------------------------//

  if (!bookmark?.url) return null;
  return (
    <Container
      ref={ref}
      $zindex={toogleDropDown ? 4 : 0}
      onClick={() => {
        setToogleDropDown(true);
        setToogleBlacBackgroundDisplay(true);
      }}
    >
      {toogleDropDown && (
        <DropUpContainer>
          {toogleDeleteContainer && (
            <DeleteContainer>
              <DeleteConfirmButton
                onClick={(e) => {
                  handelDeleteOnClick;
                }}
              >
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
                  onClick={(e) => {
                    e.preventDefault(), setToogleDeleteContainer(false);
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
        onClick={(e) => {
          e.preventDefault();

          handleClick(bookmark?.url);
        }}
        href={bookmark?.url}
      >
        <BookmarkContainer>
          <TodoImageContainer>
            {isTodo && <StyledImage src='/svg/writingpad.svg' width={12} />}
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
              const path = shortenString(
                extractChildPathFromURL(child.url),
                20
              );
              return (
                <StyledA
                  href={child.url}
                  target='_blank'
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
          <DougnutContainer>
            <Doughnut data={data} options={options} />
          </DougnutContainer>
        </DropDownContainer>
      )}
    </Container>
  );
};
