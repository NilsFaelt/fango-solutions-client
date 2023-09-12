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
