import React from 'react';
import ProjectBlock from "./Block/ProjectBlock";
import HeroPage from "../Common/HeroPage";
import {useTranslation} from "react-i18next";
import ProjectsData from "../Data/ProjectsData";

export default function PageProjectShadowsOfUnforgottenAncestors() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title="Shadows Of Unforgotten Ancestors"
                description1={t("Author's technique. Oil, acrylic on canvas.")}
                description2={t(
                    "As an artist, I am concerned about the topic of extinction of species, since they are an integral part of our nature, create the beauty of this world")}
                img={require("./../../assets/images/project/shadows-of-unforgotten-ancestors/shadows-of-unforgotten-ancestors-bg.jpg")}
            />
            <ProjectBlock items={ProjectsData().shadowsOfUnforgottenAncestors}/>
        </>
    )
}