import { FC } from "react";
import { Container } from "./HomePageView.style";
import { MainTextContainer, TeaserInfo } from "@/components";
import MainSection from "@/features/MainSection/views/MainSection.view";
import { MainTitle } from "@/ui";

export const HomePageView: FC = () => {
  return (
    <Container>
      <MainTitle
        text='FANGO SOLUTIONS '
        underText='Simplfied to suit evryone'
      />

      <MainSection>
        <MainTextContainer
          title='What are we'
          underTitle='And why?'
          text='We are a SaaS (Software as a Service) platform dedicated to simplifying everyday operations for businesses. Our mission is to streamline your workflow by consolidating a wide range of SaaS tools into a single, user-friendly product. Our goal is to enhance your efficiency and productivity without the need for extensive hours of learning and training. With our platform, you can seamlessly manage various aspects of your business without the hassle of navigating multiple complex systems. Your time is valuable, and we are here to make sure you spend it wisely.'
        />
        <TeaserInfo
          categoryColor='main'
          categoryText='Saas'
          title='A new saas in town'
          text='Created by the user, for the user, to make your workday a smile.'
          imageSrc='https://images.unsplash.com/photo-1499711860525-c485eb341d5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
        />
        <TeaserInfo
          categoryColor='tech'
          categoryText='Technology'
          title='All in one'
          text='We asked compnies what they wanted, and created a collection of it all. But we simplified for the sake of not needing a bachelor to learn how to use it'
          imageSrc='https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2392&q=80'
        />
        <TeaserInfo
          categoryColor='company'
          categoryText='Your wish our law'
          title='You are the creator'
          text='With your feedback we will do all we can to update the product to fit your needs. This product is for the user, not the developer.'
          imageSrc='https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80'
        />
        <TeaserInfo
          categoryColor='allaround'
          categoryText='Get started'
          title='Try for free 3 months'
          text='We will not charge a dime without your consent, After the trail you can just stop using our service and no money will be asked.'
          imageSrc='https://images.unsplash.com/photo-1610305648144-6ed31abe4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3033&q=80'
        />
      </MainSection>
    </Container>
  );
};
