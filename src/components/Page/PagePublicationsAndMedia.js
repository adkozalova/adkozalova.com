import React from 'react';
import {useTranslation} from "react-i18next";
import {i18nTo} from "../../Util";
import HeroPage from "../Common/HeroPage";
import GalleryItem from "../Common/GalleryItem";

export default function PagePublicationsAndMedia() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title={t('Publications & Media')}
                description1={t("Articles, publications, videos & mentions.")}
                description2={t("For cooperation or interviews, please contact through the channels available on the \"Contacts\" page.")}
                img={require("../../assets/images/publication/hero.jpg")}
            />
            <section className="portfolio_warp" id="projects">
                <div className="port_bg_text">
                    <h1 className="bg_strock_text" data-parallax='{"x": -200}'>{t('Media')}</h1>
                </div>
                <div className="container">
                    <div className="row portfolio_single_wrap">

                        <GalleryItem item={{
                            title: "LandEscape Art Review",
                            link: i18nTo("/publications-and-media/landescape-art-review-2021"),
                            img: require("../../assets/images/publication/land-escape-art-review-2021/cover.jpg"),
                            imgAlt: "LandEscape Art Review, Special Edition cover",
                            tags: "Special Edition, 03.2021",
                            isRight: false
                        }}/>
                        <GalleryItem item={{
                            title: "Art Magazine Al-Tiba9",
                            link: i18nTo("/publications-and-media/al-tiba9-issue07"),
                            img: require("../../assets/images/publication/al-tiba9-issue07/cover.jpg"),
                            imgAlt: "Art Magazine Al-Tiba9 cover",
                            tags: "ISSUE07, 02.2021",
                            isRight: true
                        }}/>
                        <GalleryItem item={{
                            title: "ART masters",
                            link: i18nTo("/publications-and-media/art-masters-part-5"),
                            img: require("../../assets/images/publication/art-masters-part-5/cover.jpg"),
                            imgAlt: "ART masters, Part V cover",
                            tags: "Part V, 07.2020",
                            isRight: false
                        }}/>

                    </div>
                </div>
            </section>
        </>
    )
}