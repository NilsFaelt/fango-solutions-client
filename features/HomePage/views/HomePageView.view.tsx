import { FC } from "react";
import { Container } from "./HomePageView.style";
import { TeaserInfo } from "@/components";
import MainSection from "@/features/MainSection/views/MainSection.view";
import { MainTitle } from "@/ui";

export const HomePageView: FC = () => {
  return (
    <Container>
      <MainTitle text='A new saas service ' underText='Simplfied to suit all' />
      <MainSection>
        <TeaserInfo
          categoryColor='main'
          categoryText='main'
          title='A new saas in town'
          text='Created by the user'
          imageSrc='https://images.unsplash.com/photo-1499711860525-c485eb341d5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
        />
        <TeaserInfo
          categoryColor='tech'
          categoryText='tech'
          title='A new saas in town'
          text='Created by the user'
          imageSrc='https://images.unsplash.com/photo-1499711860525-c485eb341d5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
        />
        <TeaserInfo
          categoryColor='company'
          categoryText='New company'
          title='A new saas in town'
          text='Created by the user'
          imageSrc='https://images.unsplash.com/photo-1499711860525-c485eb341d5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
        />
      </MainSection>
    </Container>
  );
};
