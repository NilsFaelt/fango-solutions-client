"use client";
import React, { useState } from "react";
import { Container, LabelAndInputContainer } from "./AddBookmarkPopup.style";
import { PrimaryButton } from "@/ui";
import { PrimaryInput, PrimaryLabel } from "@/styles";

import { createValidURL, extractUrlMainName } from "../../utils";

export const AddBookmarkPopup = () => {
  const [url, Seturl] = useState(null);
  const validUrl = createValidURL("https://www.harrys.se/start/");
  const urlShortName = extractUrlMainName(validUrl);
  return (
    <Container>
      <LabelAndInputContainer>
        <PrimaryLabel>ADD URL</PrimaryLabel>
        <PrimaryInput required placeholder=' www.example.com' />
      </LabelAndInputContainer>
      <PrimaryButton text='ADD' />
    </Container>
  );
};
