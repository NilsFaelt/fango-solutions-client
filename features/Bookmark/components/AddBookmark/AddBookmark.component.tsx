"use client";
import React, { FC, useRef, useState } from "react";
import { Container, LabelAndInputContainer } from "./AddBookmark.style";
import { PrimaryButton } from "@/ui";
import { PrimaryInput, PrimaryLabel } from "@/styles";
import { createValidURL, extractUrlMainName } from "../../utils";
import { MainText } from "@/ui/display/MainText/MainText.component";

interface Props {}
export const AddBookmark: FC<Props> = ({}) => {
  const [url, Seturl] = useState(null);
  const validUrl = createValidURL("https://www.harrys.se/start/");
  const urlShortName = extractUrlMainName(validUrl);

  return (
    <Container>
      <LabelAndInputContainer>
        <PrimaryLabel>WEBSITE URL</PrimaryLabel>
        <MainText fontSize='12' margin='0'>
          Copy paste your website adress of choice
        </MainText>
        <MainText margin='0' fontSize='12'>
          or manulay type in
        </MainText>
        <PrimaryInput placeholder='www.mypage.com' required />
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
      <PrimaryButton text='ADD' />
    </Container>
  );
};
