import { FC } from "react";
import { Container } from "./HomePageView.style";
import { MainTextContainer, TeaserInfo } from "@/components";
import { MainTitle } from "@/ui";
import teaserInfo from "../../../data/json/InfoData.json";
import MainSection from "@/features/MainSection/views/MainSection.view";
import { CategoryColorMapType } from "@/styles/colorMaps";

export const HomePageView: FC = () => {
  return (
    <Container>
      <MainTitle text='FANGO SOLUTIONS ' underText='Created for you' />

      <MainSection>
        <MainTextContainer
          title='What are we'
          underTitle='And why?'
          text='Our platform prioritizes streamlined bookmark utilization, evolving through user feedback. Crafted for an intuitive browsing experience, it adapts and expands functionalities. Focused on user input, were committed to enhancing and simplifying your interaction with bookmarks. Our aim is to consolidate tools seamlessly, offering an efficient browsing interface. User feedback propels our development, ensuring continuous evolution tailored to your needs. As we expand, our commitment remains steadfast in integrating improvements that refine bookmark usage. Your browsing efficiency is our focus, and were dedicated to refining our platform to optimize your experience with bookmarks.'
        />
        {teaserInfo?.map((item, i: number) => {
          return (
            <TeaserInfo
              key={i}
              link={`display-info/${item.id}`}
              categoryColor={item.categoryColor as CategoryColorMapType}
              categoryText={item.underTitle}
              title={item.title}
              text={item.shortDescription}
              imageSrc={item.imageSrc}
            />
          );
        })}
      </MainSection>
    </Container>
  );
};
