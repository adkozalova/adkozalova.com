import React from 'react';
import Project from "../Projects/Project";
import HeroPage from "../Common/HeroPage";
import {useTranslation} from "react-i18next";
import ProjectsData from "../Data/ProjectsData";

export default function PageProjectBlackAndWhite() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title="Black & White"
                description1={t("Author's technique. Oil, acrylic on canvas.")}
                description2={t("The main line in the author’s works is the image of a woman. "
                    + "The paintings are done in black & white colors similar to old photos, like a memory or an accidentally remembered fragment. This art is about that nothing happens by chance in the world. "
                    + "Everything that has happened and will happen can extremely change our life, our plans, and ourselves.  You need to be more attentive to life.  Be thankful for everything that happens. "
                    + "The main task facing the author is to carefully preserve the sensations, subtle feelings, and life itself in its unsurpassed moments.")}
                img={require("./../../assets/images/project/black-and-white/black-and-white-bg.jpg")}
            />
            <Project items={ProjectsData().blackAndWhite}/>
        </>
    )
}