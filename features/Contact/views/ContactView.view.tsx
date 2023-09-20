import React, { FC } from "react";
import { Container } from "./ContactView.style";
import { MainTitle } from "@/ui";
import { ContactForm } from "../components/ContactForm/ContactForm.component";

export const ContactView: FC = () => {
  return (
    <Container>
      <MainTitle linkUrl='/' text='Contact' underText='Lets talk' />
      <ContactForm />
    </Container>
  );
};
