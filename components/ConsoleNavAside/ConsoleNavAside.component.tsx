import React, { useContext } from "react";
import { Container, InnerLinkContainer } from "./ConsoleNavAside.style";
import { MainTitle } from "@/ui";
import { SignoutButton } from ".";
import { NavLink } from "./components";

export const ConsoleNavAside = () => {
  return (
    <Container>
      <MainTitle linkUrl='/' text='FANGO SOLUTIONS' underText='Console' />

      <NavLink text='OVERVIEW' linkPath='/overview' svgPath='/svg/eye.svg' />

      <NavLink
        text='BOOKMARKS'
        linkPath='/bookmarks'
        svgPath='/svg/browser.svg'
      />

      <NavLink
        text='ANALYTICS'
        linkPath='/analytics'
        svgPath='/svg/analytics.svg'
      />

      <SignoutButton />
    </Container>
  );
};
