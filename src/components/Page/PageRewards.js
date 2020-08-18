import React from 'react';
import PageRewardsContent from "./PageRewardsContent";
import HeroPage from "../Block/HeroPage";

export default function PageRewards() {
  return (
      <>
        <HeroPage
            title="Rewards"
            description1=""
            img="/images/page-hero-bg.jpg"
        />
        <PageRewardsContent/>
      </>
  )
}