import React from 'react';
import PageRewardsContent from "./PageRewardsContent";
import HeroPage from "../Block/HeroPage";
import {useTranslation} from "react-i18next";

export default function PageRewards() {
  const [t] = useTranslation();
  return (
      <>
        <HeroPage
            title={t("Rewards")}
            description1=""
            description2=""
            img="/images/page-hero-bg.jpg"
        />
        <PageRewardsContent/>
      </>
  )
}