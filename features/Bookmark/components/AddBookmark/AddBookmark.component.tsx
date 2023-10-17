"use client";
import React, { FC, useRef, useState } from "react";
import {
  Container,
  DisplayUrlWrapper,
  LabelAndInputContainer,
  StyledA,
  StyledImage,
} from "./AddBookmark.style";
import { PrimaryButton } from "@/ui";
import { PrimaryInput, PrimaryLabel } from "@/styles";
import { createValidURL, validateUrl } from "../../utils";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { useMutateAddBookmark } from "@/hooks";

interface Props {
  idToken: string;
}
export const AddBookmark: FC<Props> = ({ idToken }) => {
  const [url, setUrl] = useState("");

  const validHttpUrl = createValidURL(url);
  const isUrl = validateUrl(validHttpUrl);
  const { mutate } = useMutateAddBookmark(idToken, validHttpUrl);
  console.log(isUrl);
  const handleClick = () => {
    mutate();
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
          Copy and can paste a more specific paths to reach different sections
          directly, example go to your profile-page and copy website adress.
        </MainText>
        <MainText margin='0' fontSize='12'>
          or manulay type in
        </MainText>
        <PrimaryInput placeholder='www.mypage.com/profile' />
      </LabelAndInputContainer>
      <PrimaryButton
        text='ADD'
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      />
    </Container>
  );
};
