import React from 'react';
import PageRewardsContent from "../Rewards/PageRewardsContent";
import HeroPage from "../Common/HeroPage";
import {useTranslation} from "react-i18next";

export default function PageRewards() {
  const [t] = useTranslation();
  return (
      <>
        <HeroPage
            title={t("Rewards")}
            description1=""
            description2=""
            img={require("./../../assets/images/page-hero-bg.jpg").default}
        />
        <PageRewardsContent/>
      </>
  )
}