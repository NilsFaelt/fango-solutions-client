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
          categoryText='Saas'
          title='A new saas in town'
          text='Created by the user, for the user, to make your workday a smile.'
          imageSrc='https://images.unsplash.com/photo-1499711860525-c485eb341d5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
        />
        <TeaserInfo
          categoryColor='tech'
          categoryText='Technology'
          title='All in one'
          text='We asked compnies what they wanted, and created a collection of it all but for the evryday user'
          imageSrc='https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2392&q=80'
        />
        <TeaserInfo
          categoryColor='company'
          categoryText='Your wish our law'
          title='You are the creator'
          text='We dont just  wnat to create what we think is usefull, we want to get your feedback, and build your dream Saas. '
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
