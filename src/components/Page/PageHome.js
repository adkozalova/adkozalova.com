import React from 'react';
import PageHomeProjects from "../Projects/Projects";
import Credentials from "../Credentials/Credentials";
import RewardsSlider from "../Rewards/RewardsSlider";
import Partners from "../Partners/Partners";
import AboutShort from "../About/AboutShort";
import HeroHome from "../Home/HeroHome";

export default function PageRewardsContent() {
  return (
      <>
        <HeroHome/>
        <PageHomeProjects/>
        <AboutShort/>
        <Credentials/>
        <RewardsSlider/>
        <Partners/>
      </>
  )
}