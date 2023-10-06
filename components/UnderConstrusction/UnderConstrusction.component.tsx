import React from "react";
import { Container } from "./UnderConstrusction.style";
import { ProfileCard, SignoutButton } from "..";
import { MainTitle } from "@/ui";
import { MainText } from "@/ui/display/MainText/MainText.component";

export const UnderConstrusction = () => {
  return (
    <Container>
      <div
        style={{
          marginLeft: "2rem",
          marginTop: "1rem",
          position: "absolute",
          left: "0rem",
        }}
      >
        <MainTitle
          text='FANGO SOLUTIONS'
          underText='Under construction'
          linkUrl='/'
        />
      </div>
      <ProfileCard />
      <div
        style={{ marginTop: "15rem", width: "300px", justifySelf: "center" }}
      >
        <MainText>
          Hello! We are currently under construction and making some
          improvements to our website. We apologize for any inconvenience this
          may cause. We will be back soon with a marvelous console and exciting
          experience for you. Thank you for your patience! - FANGO SOLUTIONS
        </MainText>
      </div>
      <div
        style={{
          marginLeft: "2rem",
          bottom: "3rem",
          position: "absolute",
          left: "0rem",
        }}
      >
        <SignoutButton />
      </div>
    </Container>
  );
};
