import React from 'react';
import HeroPage from "../../Common/HeroPage";
import {Trans, useTranslation} from "react-i18next";
import GalleryItems from "../../Common/GalleryItems";
import {ArtworksDataFindAll} from "../../Data/ArtworksData";

export default function PageArtProjectFragile() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title={t("FRAGILE")}
                description1={t("08.10.2020 - 28.10.2020 Kyiv, Ukraine - Ornament Art Space")}
                description2=""
                img={require("../../../assets/images/art-project/hero.jpg")}
            />
            <Content/>
            <GalleryItems items={ArtworksDataFindAll([
                "Installation FRAGILE, 2020",
                "Installation Good morning, 2020",
                "Ethereal, 2020",
                "Gift, 2020",
                "Breakfast, 2020",
                "Insomnia, 2020"
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

                                <h3 className="blog_inner_title">{t('Personal exhibition "FRAGILE" in Ornament Art Space')}</h3>

                                <div className="blog_simg_img">
                                    <a className="stretched-link text-info" href="https://www.facebook.com/events/1665819606925345/"
                                       target={"_blank"}
                                       rel="noopener noreferrer">
                                        <img src={require("../../../assets/images/art-project/fragile/gallery.jpg")}
                                             className="img-fluid"
                                             alt="Personal art project Fragile"/>
                                    </a>
                                </div>

                                <Trans i18nKey={"PageArtProjectFragile.text"}>
                                    <p>From October 8 in Ornament Art Space (Kyiv, 53 Vasyl Tyutyunnyka Street) the art project of the artist Viktoria
                                        Adkozalova "FRAGILE" will be presented.</p>
                                    <p>The exposition of the exhibition is a combination of paintings and installations. The artist explores the
                                        feelings associated with the
                                        experience of the past. The focus of the project is on a woman, namely on her emotional states and feelings.
                                        The artist's desire to
                                        convey the beauty of the moment forces her to abandon the color and details of the images, personification of
                                        faces. The only thing left
                                        for the viewer - think about is the artistic image.</p>
                                    <p>"FRAGILE" is a symbolic author's project about impressions and memories. The original technique of "parallel
                                        lines" gives a fragile
                                        elegance to the image and brings to the theme of the vulnerability of the soul. Parallel lines symbolize the
                                        essence of being and the
                                        infinite flow forward. Like Strings Theory, which states that the smallest particles are the strings that
                                        sound and create our
                                        Universe.</p>
                                    <p>This is, indeed, the intention to comprehend the world of emotions and feelings, an attempt to penetrate into
                                        the inner world of the
                                        viewer, to touch the mystery of his soul.</p>
                                </Trans>

                                <div className="blog_simg_img">
                                    <img src={require("../../../assets/images/art-project/fragile/photo-1.jpg")} className="img-fluid" alt="Personal exhibition FRAGILE in Ornament Art Space"/>
                                </div>
                                <div className="blog_simg_img">
                                    <img src={require("../../../assets/images/art-project/fragile/photo-2.jpg")} className="img-fluid" alt="Personal exhibition FRAGILE in Ornament Art Space"/>
                                </div>
                                <div className="blog_simg_img">
                                    <img src={require("../../../assets/images/art-project/fragile/photo-3.jpg")} className="img-fluid" alt="Personal exhibition FRAGILE in Ornament Art Space"/>
                                </div>
                                <div className="blog_simg_img">
                                    <img src={require("../../../assets/images/art-project/fragile/photo-4.jpg")} className="img-fluid" alt="Personal exhibition FRAGILE in Ornament Art Space"/>
                                </div>

                                <p><b>{t('Dates')}:</b> 08.10.2020 - 28.10.2020<br/>
                                    <b>{t('Location')}:</b> {t('Kyiv, Ukraine')} - <a className="stretched-link text-info"
                                                                        href="https://www.facebook.com/events/1665819606925345/"
                                                                        target={"_blank"}
                                                                        rel="noopener noreferrer">Ornament Art Space</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}