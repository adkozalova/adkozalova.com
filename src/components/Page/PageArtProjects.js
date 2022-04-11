import React from 'react';
import HeroPage from "../Common/HeroPage";
import {useTranslation} from "react-i18next";
import {i18nTo} from "../../Util";
import GalleryItem from "../Common/GalleryItem";

export default function PageArtProjects() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title={t('Art Projects')}
                description1={t("Exhibitions, events, residences.")}
                description2={t("Viktoria is a participant of various Ukrainian and international exhibitions and residences.")}
                img={require("../../assets/images/art-project/hero.jpg")}
            />
            <section className="portfolio_warp" id="projects">
                <div className="port_bg_text">
                    <h1 className="bg_strock_text" data-parallax='{"x": -200}'>Projects</h1>
                </div>
                <div className="container">
                    <div className="row portfolio_single_wrap">

                        <GalleryItem item={{
                            title: "Shadows Of Unforgotten Ancestors",
                            link: i18nTo("/art-projects/shadows-of-unforgotten-ancestors"),
                            img: require("../../assets/images/art-project/shadows-of-unforgotten-ancestors/main.jpg"),
                            imgAlt: "Personal art project - Shadows Of Unforgotten Ancestors",
                            tags: "29.01.2022-20.02.2022",
                            isRight: false
                        }}/>
                        <GalleryItem item={{
                            title: "Alone",
                            link: i18nTo("/art-projects/alone"),
                            img: require("../../assets/images/art-project/alone/main.jpg"),
                            imgAlt: "Personal exhibition - Alone",
                            tags: "30.01.2021-25.03.2021",
                            isRight: true
                        }}/>
                        <GalleryItem item={{
                            title: "FRAGILE",
                            link: i18nTo("/art-projects/fragile"),
                            img: require("../../assets/images/art-project/fragile/main.jpg"),
                            imgAlt: "Personal art project - FRAGILE",
                            tags: "08.10.2020-28.10.2020",
                            isRight: false
                        }}/>

                    </div>
                </div>
            </section>
        </>
    )
}
