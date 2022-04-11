import React from 'react';
import HeroPage from "../../Common/HeroPage";
import {Trans, useTranslation} from "react-i18next";

export default function PagePublicationLandEscapeArtReview2021() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title={t("LandEscape Art Review")}
                description1={t("Special Edition. Published on Mar 30, 2021")}
                description2=""
                img={require("../../../assets/images/publication/hero.jpg")}
            />
            <Content/>
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

                                <h3 className="blog_inner_title">{t('LandEscape Art Review, Special Edition')}</h3>

                                <Trans i18nKey={"PagePublicationLandEscapeArtReview2021.text"}>
                                    <p>LandEscape is an art publication for established and emerging artists to engage in professional critique and artistic introspection,
                                        that aims to open the dialogue between artists and audience, between thoughts and their articulation.</p>
                                </Trans>

                                <Item page={1}/>
                                <Item page={2}/>
                                <Item page={3}/>
                                <Item page={4}/>
                                <Item page={5}/>
                                <Item page={6}/>
                                <Item page={7}/>
                                <Item page={8}/>
                                <Item page={9}/>
                                <Item page={10}/>
                                <Item page={11}/>
                                <Item page={12}/>

                                <p><b>{t('Full magazine version')}:</b> <a className="stretched-link text-info"
                                                                    href="https://issuu.com/landescapeartpress/docs/vol-57"
                                                                    target={"_blank"}
                                                                    rel="noopener noreferrer">LandEscape Art Review, Special Edition</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export function Item(props) {
    const {page} = props;
    return (
        <div className="blog_simg_img">
            <a className="stretched-link text-info" href={"https://issuu.com/landescapeartpress/docs/vol-57/" + (page * 2 + 3)}
               target={"_blank"}
               rel="noopener noreferrer">
                <img src={require("../../../assets/images/publication/land-escape-art-review-2021/LandEscape_Art_Review_" + page + ".jpg")}
                     className="img-fluid"
                     alt={"LandEscape Art Review, Special Edition - page " + (page * 2 + 2)}/>
            </a>
        </div>
    );
}