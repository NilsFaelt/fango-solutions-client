import React, { FC, useEffect, useRef, useState } from "react";
import {
  Container,
  ButtonWrapper,
  InputLabelWrapper,
  AllInputLabelWrapper,
} from "./UpdateUrlsPopUp.style";
import { PrimaryInput, PrimaryLabel } from "@/styles";
import { MainTitle, PrimaryButton } from "@/ui";
import {
  useBookMarkById,
  useClickOustsideToClose,
  useMutatePatchBookmark,
} from "@/hooks";

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
  const { data } = useBookMarkById(token, id);
  const [childUrls, setChilsUrls] = useState<ChildUrls[]>([]);
  const [childUrlsNew, setChilsUrlsNew] = useState<ChildUrls[]>([]);
  const [bookmark, setBookmark] = useState<string>("");

  const { mutateAsync } = useMutatePatchBookmark(
    token,
    id,
    bookmark,
    childUrls
  );
  useEffect(() => {
    if (data?.url) setBookmark(data.url);
    if (data?.children) setChilsUrls(data.children);
  }, [data]);

  const handleClick = () => {
    mutateAsync().then(() => {
      setTooglePopUp(false);
      console.log("suecess");
    });
  };

  const handleChildUrlChange = (index: number, value: string) => {
    const updatedChildUrls = [...childUrls];
    updatedChildUrls[index] = { ...updatedChildUrls[index], url: value };
    setChilsUrls(updatedChildUrls);
  };
  const remainingInputCount = Math.max(3 - childUrls.length, 0);
  if (!data) return null;
  const { url } = data;
  return (
    <Container ref={ref}>
      <MainTitle text='Upadte' underText='Bookmark Urls' />
      <AllInputLabelWrapper>
        <InputLabelWrapper>
          <PrimaryLabel>Upadte Main Url</PrimaryLabel>
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
        {[...Array(remainingInputCount)].map((_, i) => (
          <InputLabelWrapper key={i}>
            <PrimaryLabel>Add new specific Url</PrimaryLabel>
            <PrimaryInput key={i} placeholder='Add Specific url' value='' />
          </InputLabelWrapper>
        ))}
        <ButtonWrapper>
          <PrimaryButton onClick={handleClick} text='Update' />
        </ButtonWrapper>
      </AllInputLabelWrapper>
    </Container>
  );
};
