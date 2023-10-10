"use client";
import React, { FC, useRef, useState } from "react";
import { Container, LabelAndInputContainer } from "./AddBookmarkPopup.style";
import { PrimaryButton } from "@/ui";
import { PrimaryInput, PrimaryLabel } from "@/styles";
import { createValidURL, extractUrlMainName } from "../../utils";
import { useClickOustsideToClose } from "@/hooks";

interface Props {
  setTooglePopup: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AddBookmarkPopup: FC<Props> = ({ setTooglePopup }) => {
  const ref = useRef(null);
  const [url, Seturl] = useState(null);
  const validUrl = createValidURL("https://www.harrys.se/start/");
  const urlShortName = extractUrlMainName(validUrl);
  useClickOustsideToClose(ref, setTooglePopup);
  console.log(ref.current, "refmatron");
  return (
    <Container ref={ref}>
      <LabelAndInputContainer>
        <PrimaryLabel>ADD URL</PrimaryLabel>
        <PrimaryInput required placeholder=' www.example.com' />
      </LabelAndInputContainer>
      <PrimaryButton text='ADD' />
    </Container>
  );
};
