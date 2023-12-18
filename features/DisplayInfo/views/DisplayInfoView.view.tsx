"use client";
import React, { FC } from "react";
import {
  Container,
  ImageAndTextContainer,
  StyledImage,
  Text,
} from "./DisplayInfo.style";
import { MainTitle } from "@/ui";
import { MainTextContainer } from "@/components";
// import data from "../../../data/json/InfoData.json";

export const DisplayInfoView: FC<{ id: string }> = ({ id }) => {
  const data = [
    {
      id: "3d0c0ce2-5145-11ee-be56-0242ac120002",
      title: "Bookmarks on steroids",
      underTitle: "Whats this?",
      categoryColor: "main",
      imageSrc: "/images/bookmarks.webp",
      shortDescription:
        "Streamline bookmarking: save, organize, and retrieve content. Ideal for daily web users managing essential information effortlessly.",
      description:
        "Our platform is meticulously crafted for efficient bookmark usage, enabling users to seamlessly save content and tools within each bookmark, effortlessly filter and organize them. Tailored as a vital tool for daily web users, it serves as an invaluable resource for tracking and saving essential information. With a user-centric approach, our platform empowers individuals to curate and manage their digital collections, ensuring easy access and efficient organization of vital web resources. Whether for professional or personal use, our platform stands as a reliable companion, simplifying the process of bookmarking, filtering, and retrieval of critical data. As we evolve, expect continual enhancements and innovative features, ensuring our platform remains a dynamic and indispensable tool for those navigating the vast online landscape.",
    },

    {
      id: "3d0c0fbc-5145-11ee-be56-0242ac120002",
      title: "Follow your progress",
      underTitle: "Analytics",
      categoryColor: "tech",
      imageSrc: "/images/analytics.webp",
      shortDescription:
        "A full section just for analytics on your work, your progress, your bookmarks use and much more",
      description:
        "We're thrilled to introduce our dedicated analytics section, meticulously designed to track your progress and bookmark usage effectively. This insightful section serves as your dashboard, providing in-depth insights into your interactions with our platform. At present, our analytics segment empowers you to delve into detailed metrics, offering a comprehensive view of your activities, bookmark history, and productivity patterns. It's a window into your journey, offering valuable data to enhance your experience. As we continue to evolve and grow our service, this analytics section will expand further, welcoming new functionalities and enriched features. Our commitment lies in continually refining this space, ensuring it evolves in tandem with your needs and our platform's advancements. Your engagement fuels our drive for innovation. We'll consistently refine and add new dimensions to this analytics hub, tailoring it to meet your evolving requirements. Expect an array of innovative tools and insights, all designed to provide you with a clearer picture of your progress and optimize your user experience. Stay tuned as we unveil an array of enhancements, bringing you closer to a comprehensive, dynamic analytics suite that grows alongside your journey.",
    },

    {
      id: "3d0c12e6-5145-11ee-be56-0242ac120002",
      title: "Im not in the box",
      underTitle: "Enchanting UX/UI",
      categoryColor: "company",
      imageSrc: "/images/bookmark.webp",
      shortDescription:
        "My design philosophy prioritizes exceptional UX/UI. We infuse joy and interactivity into every element, ensuring a seamless, delightful user experience. Your interaction with our platform is an enjoyable journey",
      description:
        "My passion for design and UX runs deep in our DNA. We see every pixel and interaction as an opportunity to elevate your experience. Our design philosophy is centered on creating intuitive, aesthetically pleasing interfaces that not only meet but exceed your expectations. We believe in making your interaction with our platform not just functional, but truly enjoyable. Our commitment to exceptional UX/UI is unwavering, and we constantly strive to make every user's journey a memorable one.",
    },
    {
      id: "3d0c152a-5145-11ee-be56-0242ac120002",
      title: "Get started",
      underTitle: "Start now for free",
      categoryColor: "allaround",
      imageSrc: "/images/login.webp",
      shortDescription:
        "Our service is born out of a deep love for development and is designed to enhance your web browsing journey. It's always free, and we're excited to share it with you.",
      description:
        "Our service is a labor of love for developers and web enthusiasts alike. It's designed to enhance your web browsing journey, providing you with tools and features that empower your online experiences. The best part? It's always free. We believe in providing a platform that's accessible to all, without any hidden charges or obligations. Dive into the world of web exploration, discover new websites, and enjoy seamless browsing. With a wide range of tools and features at your fingertips, you can make the most of your online adventures. Join us in celebrating the art of web browsing. Start now, and experience the joy of discovering, exploring, and innovating with our service.",
    },
  ];

  const item = data.find((item) => item?.id === id);

  return (
    <Container>
      <MainTitle
        linkUrl='/'
        text='FANGO SOLUTIONS'
        underText='Simplfied to suit evryone'
      />
      <ImageAndTextContainer>
        <StyledImage src={item?.imageSrc} />
        <MainTextContainer
          title={item?.title}
          underTitle={item?.underTitle}
          text={item?.shortDescription ? item?.shortDescription : ""}
        />
      </ImageAndTextContainer>
      <Text>{item?.description}</Text>
    </Container>
  );
};
