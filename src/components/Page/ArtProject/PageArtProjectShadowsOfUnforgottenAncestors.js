import React from 'react';
import HeroPage from "../../Common/HeroPage";
import {Trans, useTranslation} from "react-i18next";
import GalleryItems from "../../Common/GalleryItems";
import {ArtworksDataFindAll} from "../../Data/ArtworksData";

export default function PageArtProjectShadowsOfUnforgottenAncestors() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title={"Shadows Of Unforgotten Ancestors"}
                description1={t('29.01.2022 - 20.02.2022 Kyiv, Ukraine - "Portal11" gallery')}
                description2=""
                img={require("../../../assets/images/art-project/hero.jpg")}
            />
            <Content/>
            <GalleryItems items={ArtworksDataFindAll([
                "Black panther, 2021",
                "Blue whale, 2022",
                "Brown bear, 2021",
                "Lion, 2021",
                "Pink flamingo, 2021",
                "Two-humped camel, 2021"
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

                                <h3 className="blog_inner_title">{t('Personal exhibition "Shadows Of Unforgotten Ancestors" in Portal11 gallery')}</h3>

                                <div className="blog_simg_img">
                                    <a className="stretched-link text-info" href="https://portal11.com.ua/en/exhibition-by-viktoriia-adkozalova-shadows-of-unforgotten-ancestors/"
                                       target={"_blank"}
                                       rel="noopener noreferrer">
                                        <img src={require("../../../assets/images/art-project/shadows-of-unforgotten-ancestors/photo-1.jpg")}
                                             className="img-fluid"
                                             alt="Shadows Of Unforgotten Ancestors"/>
                                    </a>
                                </div>

                                <Trans i18nKey={"PageArtProjectShadowsOfUnforgottenAncestors.text"}>
                                    <p>Gallery Portal11 presents exhibition by Viktoria Adkozalova "Shadows of unforgotten ancestors".</p>
                                    <p>"Shadows of unforgotten ancestors"<br/>
                                        The project presents zoomorphic images of animals on the verge of extinction.<br/>
                                        «I chose grotesque as my main artistic technique. Thanks to the combination of real forms and fictional motifs, a holistic picture of the world is created to
                                        convey the relationship of all living things on Earth.»</p>
                                    <p>Today, about 40% of all living species are on the verge of extinction. Mankind needs to think about this because we have all the chances to stay alone in the
                                        technogenic desert.</p>
                                </Trans>

                                <div className="blog_simg_img">
                                    <img src={require("../../../assets/images/art-project/shadows-of-unforgotten-ancestors/photo-2.jpg")} className="img-fluid" alt="Shadows Of Unforgotten Ancestors"/>
                                </div>
                                <div className="blog_simg_img">
                                    <img src={require("../../../assets/images/art-project/shadows-of-unforgotten-ancestors/photo-3.jpg")} className="img-fluid" alt="Shadows Of Unforgotten Ancestors"/>
                                </div>

                                <p><b>{t('Dates')}:</b> 29.01.2022 - 20.02.2022<br/>
                                    <b>{t('Location')}:</b> {t('Kyiv, Ukraine')} - <a className="stretched-link text-info" href="https://portal11.com.ua/" target={"_blank"} rel="noopener noreferrer">Portal11 gallery</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}