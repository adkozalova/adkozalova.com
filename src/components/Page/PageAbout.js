import React from "react";
import RewardsSlider from "../Rewards/RewardsSlider";
import Credentials from "../Credentials/Credentials";
import HeroPage from "../Common/HeroPage";
import PageAboutContent from "../About/PageAboutContent";
import {useTranslation} from "react-i18next";

export default function PageAbout() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title={t("About Me")}
                description1={t("Pictorial art is a frozen, unique moment")}
                description2=""
                img={require("./../../assets/images/page-hero-bg.jpg")}
            />
            <PageAboutContent/>
            <RewardsSlider/>
            <Credentials/>
        </>
    );
}