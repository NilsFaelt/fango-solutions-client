import React, { FC, useEffect, useRef, useState } from "react";
import {
  Container,
  ButtonWrapper,
  InputLabelWrapper,
  PrimaryInput,
  AllInputLabelWrapper,
} from "./UpdateUrlsPopUp.style";
import { PrimaryLabel } from "@/styles";
import { MainTitle, PrimaryButton } from "@/ui";
import {
  useBookMarkById,
  useClickOustsideToClose,
  useMutatePatchBookmark,
} from "@/hooks";
import { createAValidUrl } from "@/features/Bookmark/utils";

interface Props {
  token: string;
  id: string;
  setTooglePopUp: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ChildUrls {
  bookmarkId: string;
  createdAt: string;
  deletedAt: string | null;
  id: string;
  updatedAt: string;
  url: string;
}

export const UpdateUrlsPopUp: FC<Props> = ({ token, id, setTooglePopUp }) => {
  const ref = useRef(null);
  useClickOustsideToClose(ref, setTooglePopUp);
  const { data, refetch } = useBookMarkById(token, id);
  const [childUrls, setChilsUrls] = useState<ChildUrls[]>([]);
  const [childUrlsNew, setChilsUrlsNew] = useState<string[]>([]);

  const [bookmark, setBookmark] = useState<string>("");
  const mainValidHttpUrl = createAValidUrl(bookmark);
  const childUrlValidated = childUrls.map((c, i) => {
    return { ...c, url: createAValidUrl(c.url) || "" };
  });
  const childUrlsNewValidated = childUrlsNew.map((c, i) => {
    return createAValidUrl(c) || "";
  });

  const { mutateAsync } = useMutatePatchBookmark(
    token,
    id,
    mainValidHttpUrl,
    childUrlValidated,
    childUrlsNewValidated
  );
  useEffect(() => {
    if (data?.url) setBookmark(data.url);
    if (data?.children) setChilsUrls(data.children);
  }, [data]);

  const handleClick = () => {
    mutateAsync().then(() => {
      setTooglePopUp(false);
      refetch();
    });
  };

  const handleChildUrlChange = (index: number, value: string) => {
    const updatedChildUrls = [...childUrls];
    updatedChildUrls[index] = { ...updatedChildUrls[index], url: value };
    setChilsUrls(updatedChildUrls);
  };
  const handleChildUrlNewChange = (index: number, value: string) => {
    setChilsUrlsNew((prev) => {
      const updatedChildUrlsNew = [...prev];
      updatedChildUrlsNew[index] = value;
      return updatedChildUrlsNew;
    });
  };

  const remainingInputCount = Math.max(3 - childUrls.length, 0);
  if (!data) return null;

  return (
    <Container ref={ref}>
      <MainTitle text='Upadte' underText='Bookmark Urls' />
      <AllInputLabelWrapper>
        <InputLabelWrapper>
          <PrimaryInput
            value={bookmark}
            onChange={(e) => setBookmark(e.target.value)}
          />
        </InputLabelWrapper>

        {childUrls.map((childUrl, index) => (
          <InputLabelWrapper key={index}>
            <PrimaryLabel>Upadte Specific Url</PrimaryLabel>
            <PrimaryInput
              key={index}
              placeholder='Add Specific url'
              value={childUrl.url}
              onChange={(e) => handleChildUrlChange(index, e.target.value)}
            />
          </InputLabelWrapper>
        ))}
        {[...Array(remainingInputCount)].map((childUrlNew, i) => (
          <InputLabelWrapper key={i}>
            <PrimaryInput
              placeholder='Add Specific url'
              value={childUrlsNew[i] || ""}
              onChange={(e) => handleChildUrlNewChange(i, e.target.value)}
            />
          </InputLabelWrapper>
        ))}
        <ButtonWrapper>
          <PrimaryButton onClick={handleClick} text='Update' />
        </ButtonWrapper>
      </AllInputLabelWrapper>
    </Container>
  );
};
