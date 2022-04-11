import React from 'react';
import HeroPage from "../../Common/HeroPage";
import {Trans, useTranslation} from "react-i18next";
import GalleryItems from "../../Common/GalleryItems";
import {ArtworksDataFindAll} from "../../Data/ArtworksData";

export default function PageArtProjectAlone() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title={t("ALONE")}
                description1={t('30.01.2021 - 25.03.2021 Kyiv, Ukraine - "Manufactura" art-gallery')}
                description2=""
                img={require("../../../assets/images/art-project/hero.jpg")}
            />
            <Content/>
            <GalleryItems items={ArtworksDataFindAll([
                "Manatees, 2021",
                "Zubr, 2021",
                "Elephant tortoise, 2021",
                "Elephant, 2021",
                "Rhino, 2021",
                "The King Fisher, 2020"
            ])}/>
        </>
    )
}

export function Content() {
    const [t] = useTranslation();
    return (
        <section className="blog_wrap blog_single_wrap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="blog_content blog_single_content">
                            <div className="blog_single_item">

                                <h3 className="blog_inner_title">{t('Personal exhibition "Alone" in Manufactura art-gallery')}</h3>

                                <div className="blog_simg_img">
                                    <a className="stretched-link text-info" href="https://manufacturaart.com/exhibitions/viktoriya-adkozalova-naedine"
                                       target={"_blank"}
                                       rel="noopener noreferrer">
                                        <img src={require("../../../assets/images/art-project/alone/gallery-1.jpg")}
                                             className="img-fluid"
                                             alt="Personal exhibition Alone in Manufactura art-gallery"/>
                                    </a>
                                </div>

                                <Trans i18nKey={"PageProjectAlone.text"}>
                                    <p>On January 30, the art gallery "Manufactura" will present the painting exhibition "Alone". The author of the presented works is a young Ukrainian contemporary
                                        artist Viktoria Adkozalova.</p>
                                    <p>Through this exposition, Viktoria invites the viewer to enter into a dialogue with art, to be alone with it. With his work, the author seeks to comprehend the
                                        most intimate feelings, subtly embody the palette of emotional states, comprehend the secret of experiences, and thereby appeal to the inner world of the
                                        viewer, find a response in his soul. Art allows the artist herself to be alone with his creative power.</p>
                                    <p>The “Alone” exposition is represented by two series of paintings that the young author has been productively working on over the past few years - female
                                        monochrome portraits “Fragile” and zoomorphic images “Shadows of Unforgotten Ancestors”.</p>
                                    <p>The main artistic technique is the grotesque, with the help of which Viktoria embodies a holistic picture of the world in the images of a person or animal,
                                        revealing the spiritual interconnection of all life on Earth.</p>
                                    <p>At the same time, the image of a woman is the leitmotif of "Alone":<br/>
                                        <i>"A woman is the Universe for me. Her emotional states and feelings in the beauty of the moment force us to abandon the color and detail of the image,
                                            personification of faces, leaving the viewer to think only the artistic image"</i> explains Viktoria.</p>
                                </Trans>

                                <div className="blog_simg_img">
                                    <img src={require("../../../assets/images/art-project/alone/viktoria-1.jpg")} className="img-fluid" alt="Personal exhibition Alone in Manufactura art-gallery"/>
                                </div>
                                <div className="blog_simg_img">
                                    <img src={require("../../../assets/images/art-project/alone/gallery-3.jpg")} className="img-fluid" alt="Personal exhibition Alone in Manufactura art-gallery"/>
                                </div>
                                <div className="blog_simg_img">
                                    <img src={require("../../../assets/images/art-project/alone/gallery-4.jpg")} className="img-fluid" alt="Personal exhibition Alone in Manufactura art-gallery"/>
                                </div>
                                <div className="blog_simg_img">
                                    <img src={require("../../../assets/images/art-project/alone/gallery-5.jpg")} className="img-fluid" alt="Personal exhibition Alone in Manufactura art-gallery"/>
                                </div>
                                <div className="blog_simg_img">
                                    <img src={require("../../../assets/images/art-project/alone/gallery-6.jpg")} className="img-fluid" alt="Personal exhibition Alone in Manufactura art-gallery"/>
                                </div>

                                <p><b>{t('Dates')}:</b> 30.01.2021 - 25.03.2021<br/>
                                    <b>{t('Location')}:</b> {t('Kyiv, Ukraine')} - <a className="stretched-link text-info"
                                                                        href="https://manufacturaart.com/"
                                                                        target={"_blank"}
                                                                        rel="noopener noreferrer">"Manufactura" art-gallery</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}