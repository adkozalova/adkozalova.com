import React from 'react';
import HeroPage from "../../Common/HeroPage";
import {Trans, useTranslation} from "react-i18next";
import GalleryItems from "../../Common/GalleryItems";
import {ArtworksDataFindAll} from "../../Data/ArtworksData";

export default function PagePublicationArtMastersPart5() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title={t("ART masters")}
                description1={t("Part V, July 2020")}
                description2=""
                img={require("../../../assets/images/publication/hero.jpg")}
            />
            <Content/>
            <GalleryItems items={ArtworksDataFindAll([
                "A dream, 2019",
                "A girl in tram, 2019",
                "Near window, 2019"
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

                                <h3 className="blog_inner_title">{t('ART masters, Part V - special project of the "CULTURE TREND" magazine')}</h3>

                                <Trans i18nKey={"PagePublicationArtMastersPart5.text"}>
                                    <p>About Ukraine – in the language of art. In the language of art of contemporary Ukrainian artists, who works in different directions, reveal different topics,
                                        choose different genres and styles. Due to the diversity of art, we strive to bring you closer to contemporary Ukraine, its versatility and grandeur. Show new
                                        sides that can be felt but difficult to describe in words. Through the works of artists, we can understand much more and reveal deeply the country, its nation,
                                        culture, mentality.</p>
                                </Trans>

                                <div className="blog_simg_img">
                                    <a className="stretched-link text-info" href="https://issuu.com/artmasters_ukraine/docs/art_masters._part_v"
                                       target={"_blank"}
                                       rel="noopener noreferrer">
                                        <img src={require("../../../assets/images/publication/art-masters-part-5/page-0.jpg")}
                                             className="img-fluid"
                                             alt="ART masters, Part V"/>
                                    </a>
                                </div>
                                <div className="blog_simg_img">
                                    <a className="stretched-link text-info" href="https://issuu.com/artmasters_ukraine/docs/art_masters._part_v/42"
                                       target={"_blank"}
                                       rel="noopener noreferrer">
                                        <img src={require("../../../assets/images/publication/art-masters-part-5/page-1.jpg")}
                                             className="img-fluid"
                                             alt="ART masters, Part V. Page 42"/>
                                    </a>
                                </div>
                                <div className="blog_simg_img">
                                    <a className="stretched-link text-info" href="https://issuu.com/artmasters_ukraine/docs/art_masters._part_v/44"
                                       target={"_blank"}
                                       rel="noopener noreferrer">
                                        <img src={require("../../../assets/images/publication/art-masters-part-5/page-2.jpg")}
                                             className="img-fluid"
                                             alt="ART masters, Part V. Page 44"/>
                                    </a>
                                </div>

                                <p>
                                    <b>{t('Full magazine version')}:</b> <a className="stretched-link text-info"
                                                                  href="https://issuu.com/artmasters_ukraine/docs/art_masters._part_v"
                                                                  target={"_blank"}
                                                                  rel="noopener noreferrer">ART masters. Part V</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
