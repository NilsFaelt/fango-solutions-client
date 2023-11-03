import React from "react";
import { Container, Title, TitleTextWrapper } from "./BookmarkDocs.style";
import { MainTitle } from "@/ui";
import { MainText } from "@/ui/display/MainText/MainText.component";

export const BookmarkDocs = () => {
  return (
    <Container>
      <MainTitle text='BOOKMARK' underText='Documentation' />
      <TitleTextWrapper>
        <Title>Add bookmark</Title>
        <MainText margin='0' fontSize='16'>
          Step 1: Navigate to your bookmarks in the left-side navbar.
        </MainText>
        <MainText margin='0' fontSize='16'>
          Step 2: Press the plus button located at the top of the page.
        </MainText>
        <MainText margin='0' fontSize='16'>
          Step 3: Add URLs by visiting your chosen web page, copying the web
          address or manually add, pasting it into the input field, and pressing
          Enter. You can add up to three different URLs for each bookmark,
          allowing you to specify multiple locations on your website.
        </MainText>
        <MainText margin='0' fontSize='16'>
          Step 4: If you see a green checkmark next to all your web addresses,
          click Save Bookmark.
        </MainText>
      </TitleTextWrapper>
      <TitleTextWrapper>
        <Title>Add Content</Title>

        <MainText margin='0' fontSize='16'>
          Step 1: Click on the bookmark of your choice. You will then see a
          cogwheel icon appear. Click on the cogwheel, and then select
          Content/Todo.
        </MainText>
        <MainText margin='0' fontSize='16'>
          Step 2: Add a title and content of your choice. If you want it to
          appear as a todo in analytics and on your bookmark, click Mark as
          Todo, before saving.
        </MainText>
        <MainText margin='0' fontSize='16'>
          Step 3: If you have content and want to extract todos from it, simply
          select the text, and a button will appear. Click the button, and the
          marked text will become a new todo in your content bar on the right
          side.
        </MainText>
        <MainText margin='0' fontSize='16'>
          Step 4: To update, if you want to apply changes, simply click Content
          in the content bar, then make your changes and save. If the content is
          marked as todo and is done, simply click Mark as done before saving.
        </MainText>
      </TitleTextWrapper>
      <TitleTextWrapper>
        <Title>Analytics and order</Title>
        <MainText margin='0' fontSize='16'>
          All your actions will be transferred to your analytics panel. Here,
          you can view content, pending todos, most-visited bookmarks, and more.
        </MainText>
        <MainText margin='0' fontSize='16'>
          Your bookmarks will automatically appear in order, with the most
          visited bookmark listed first, and so on.
        </MainText>
      </TitleTextWrapper>
    </Container>
  );
};
