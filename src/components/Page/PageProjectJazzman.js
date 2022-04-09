import React from 'react';
import Project from "../Projects/Project";
import HeroPage from "../Common/HeroPage";
import {useTranslation} from "react-i18next";
import ProjectsData from "../Data/ProjectsData";

export default function PageProjectJazzman() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title="Jazzman"
                description1={t("Author's technique. Oil, acrylic on canvas.")}
                description2={t("Jazz is freedom, in music and life. It consists of weightlessness and continuous forward movement sensations. "
                    + "On these artworks, the main one is a musician who connects with his instrument like is one whole. "
                    + "The colored ragged background emphasizes freedom.")}
                img={require("./../../assets/images/project/jazzman/jazzman-bg.jpg")}
            />
            <Project items={ProjectsData().jazzman}/>
        </>
    )
}