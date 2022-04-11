import React from 'react';
import HeroPage from "../../Common/HeroPage";
import {Trans, useTranslation} from "react-i18next";
import GalleryItems from "../../Common/GalleryItems";
import {ArtworksDataFindAll} from "../../Data/ArtworksData";

export default function PagePublicationAlTiba9Issue07() {
    return (
        <>
            <HeroPage
                title={"Al-Tiba9"}
                description1={"ISSUE07, February 2021"}
                description2=""
                img={require("../../../assets/images/publication/hero.jpg")}
            />
            <Content/>
            <GalleryItems items={ArtworksDataFindAll([
                "Cachalot's family, 2020",
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

                                <h3 className="blog_inner_title">Art Magazine Al-Tiba9, ISSUE07</h3>

                                <Trans i18nKey={"PagePublicationAlTiba9Issue07.text"}>
                                    <p>Al-Tiba9 Art Magazine reflects modern society and its environment through the works of experimental contemporary artists, showcased for their innovation in
                                        photography, sculpture, performance, painting, Fashion, design, and architecture. The ISSUE07 features international artists who embody in their work a spirit
                                        of inspired forward-thinking. These artists enjoy the full reach of Al-Tiba9’s extensive network of galleries, museums, art dealers, collectors, art
                                        professionals, art lovers, and academics all over the world.</p>
                                </Trans>

                                <div className="blog_simg_img">
                                    <a className="stretched-link text-info" href="https://youtu.be/zaiB70Huwck?t=4516"
                                       target={"_blank"}
                                       rel="noopener noreferrer">
                                        <img src={require("../../../assets/images/publication/al-tiba9-issue07/page-1.jpg")}
                                             className="img-fluid"
                                             alt="Art Magazine Al-Tiba9, ISSUE07"/>
                                    </a>
                                </div>

                                <p>
                                    <b>{t('Full magazine review on Youtube')}:</b> <a className="stretched-link text-info"
                                                                                      href="https://youtu.be/zaiB70Huwck"
                                                                                      target={"_blank"}
                                                                                      rel="noopener noreferrer">Al-Tiba9 Art Magazine ISSUE07 | Full Review</a><br/>
                                    <b>{t('Buy print magazine')}:</b> <a className="stretched-link text-info"
                                                                         href="https://www.altiba9.com/shop/issue07-print-magazine"
                                                                         target={"_blank"}
                                                                         rel="noopener noreferrer">Art Magazine Al-Tiba9, ISSUE07</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
