import React from "react";
import RewardsSlider from "../Block/RewardsSlider";
import Credentials from "../Block/Credentials";
import HeroPage from "../Block/HeroPage";
import PageAboutContent from "./PageAboutContent";

export default function PageAbout() {
  return (
      <>
        <HeroPage
            title="About Me"
            description1="Pictorial art is a frozen unique moment"
            img="/images/page-hero-bg.jpg"
        />
        <PageAboutContent/>
        <RewardsSlider/>
        <Credentials/>
      </>
  );
}