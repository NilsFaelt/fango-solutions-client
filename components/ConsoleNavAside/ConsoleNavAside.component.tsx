import React from "react";
import { Container, InnerLinkContainer } from "./ConsoleNavAside.style";
import { MainTitle } from "@/ui";
import { SignoutButton } from ".";
import { NavLink } from "./components";

export const ConsoleNavAside = () => {
  return (
    <Container>
      <MainTitle linkUrl='/' text='FANGO SOLUTIONS' underText='Console' />
      <NavLink text='OVERVIEW' linkPath='/console' svgPath='/svg/eye.svg' />
      <InnerLinkContainer>
        <NavLink
          text='BOOKMARKS'
          linkPath='/bookmarks'
          svgPath='/svg/browser.svg'
        />
        <NavLink text='TODO' linkPath='/' svgPath='/svg/todo.svg' />
      </InnerLinkContainer>
      <NavLink text='ANALYTICS' linkPath='/' svgPath='/svg/analytics.svg' />
      <SignoutButton />
    </Container>
  );
};
