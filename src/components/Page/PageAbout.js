import React from "react";
import RewardsSlider from "../Block/RewardsSlider";
import Credentials from "../Block/Credentials";
import HeroPage from "../Block/HeroPage";
import PageAboutContent from "./PageAboutContent";
import {useTranslation} from "react-i18next";

export default function PageAbout() {
  const [t] = useTranslation();
  return (
      <>
        <HeroPage
            title={t("About Me")}
            description1={t("Pictorial art is a frozen unique moment")}
            description2=""
            img="/images/page-hero-bg.jpg"
        />
        <PageAboutContent/>
        <RewardsSlider/>
        <Credentials/>
      </>
  );
}