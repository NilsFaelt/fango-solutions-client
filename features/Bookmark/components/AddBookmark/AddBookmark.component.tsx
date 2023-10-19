"use client";
import React, { FC, useRef, useState } from "react";
import {
  ButtonInputWrapperCollumn,
  Container,
  DisplayUrlWrapper,
  LabelAndInputContainer,
  StyledA,
  StyledImage,
} from "./AddBookmark.style";
import { AddButton, PrimaryButton } from "@/ui";
import { PrimaryInput, PrimaryLabel } from "@/styles";
import { createValidURL, validateUrl } from "../../utils";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { useMutateAddBookmark } from "@/hooks";

interface Props {
  idToken: string;
}
export const AddBookmark: FC<Props> = ({ idToken }) => {
  const [url, setUrl] = useState("");
  const [childUrl, setChildUrl] = useState("");
  const [childUrls, setChildUrls] = useState<string[]>([]);
  const hidePlusButton = childUrls.length < 3;
  const validHttpUrl = createValidURL(url);
  const isUrl = validateUrl(validHttpUrl);
  const { mutate } = useMutateAddBookmark(idToken, validHttpUrl, childUrls);

  const handleClick = () => {
    if (isUrl) mutate();
  };

  const handleAddChildUrlOnClick = (childUrl: string) => {
    const validHttpUrl = createValidURL(childUrl);
    const isUrl = validateUrl(validHttpUrl);
    if (isUrl && validHttpUrl) {
      setChildUrls((prev) => [...prev, validHttpUrl]);
      setChildUrl("");
    }
  };
  return (
    <Container>
      <LabelAndInputContainer>
        <PrimaryLabel>WEBSITE URL</PrimaryLabel>
        <MainText fontSize='12' margin='0'>
          Copy paste your website adress of choice
        </MainText>
        <MainText margin='0' fontSize='12'>
          or manually type in, ex: google.com
        </MainText>
        <PrimaryInput
          onChange={(e) => setUrl(e.target.value)}
          placeholder='www.mypage.com'
          required
        />
        {validHttpUrl && (
          <DisplayUrlWrapper>
            <MainText margin='0'>Try me first ?</MainText>
            <StyledA color='green' href={validHttpUrl} target='_blank'>
              {validHttpUrl}{" "}
              {isUrl && (
                <StyledImage
                  alt='Green check mark'
                  width={12}
                  height={12}
                  src='/svg/check.svg'
                />
              )}
            </StyledA>
          </DisplayUrlWrapper>
        )}
      </LabelAndInputContainer>
      <LabelAndInputContainer>
        <PrimaryLabel>SPECIFIC PART OF WEBSITE</PrimaryLabel>
        <MainText fontSize='12' margin='0'>
          Add more specific locations on site.
        </MainText>
        <ButtonInputWrapperCollumn>
          <PrimaryInput
            onChange={(e) => setChildUrl(e.target.value)}
            placeholder='www.mypage.com/profile'
            value={childUrl}
          />
          {hidePlusButton && (
            <AddButton
              onClick={(e) => {
                e.preventDefault();
                handleAddChildUrlOnClick(childUrl);
              }}
            />
          )}
        </ButtonInputWrapperCollumn>
        {childUrls.length > 0 && (
          <DisplayUrlWrapper>
            {childUrls.map((url, i) => {
              return <ChildUrl key={i} url={url} />;
            })}
          </DisplayUrlWrapper>
        )}
      </LabelAndInputContainer>

      <PrimaryButton
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        text={isUrl ? "SAVE BOOKMARK" : "ADD VALID URL"}
      />
    </Container>
  );
};

export const ChildUrl: FC<{ url: string }> = ({ url }) => {
  const validHttpUrl = createValidURL(url);
  const isUrl = validateUrl(validHttpUrl);

  return (
    <StyledA color='green' href={url} target='_blank'>
      {url}
      {isUrl && (
        <StyledImage
          alt='Green check mark'
          width={12}
          height={12}
          src='/svg/check.svg'
        />
      )}
    </StyledA>
  );
};
