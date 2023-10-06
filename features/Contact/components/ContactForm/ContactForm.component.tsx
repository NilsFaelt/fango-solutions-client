import React from "react";
import {
  Container,
  MailPopUpText,
  UnderTextContainer,
} from "./ContactForm.style";
import { MainTextContainer } from "@/components";
import { MainTitle } from "@/ui";

export const ContactForm = () => {
  return (
    <Container>
      <MainTextContainer
        text='Hello!
       Im happy that you want to be a part of our new  saas.
       We are still in the early process of building this project but please send us a mail and we will do all in our power will help .
       
       '
      />
      <MailPopUpText href='mailto:email@example.com?subject=Subject%20Here&body=Message%20Body%20Here'>
        NilsFaelt@Gmail.com
      </MailPopUpText>
      <UnderTextContainer>
        <MainTitle text='Best Regards' underText='Team Fango' />
      </UnderTextContainer>
    </Container>
  );
};
