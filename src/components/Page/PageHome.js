import React from 'react';
import PageHomeProjects from "./Block/ProjectsBlock";
import CredentialsList from "../Common/CredentialsList";
import RewardsSlider from "../Common/RewardsSlider";
import PartnersBlock from "../Common/PartnersBlock";
import {Trans, useTranslation} from "react-i18next";
import {i18nTo} from "../../Util";
import {Link} from "react-router-dom";
import SocialMediaList from "../Common/SocialMediaList";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function PageRewardsContent() {
    return (
        <>
            <PageHomeHeroBlock/>
            <PageHomeProjects/>
            <PageHomeAboutBlock/>
            <CredentialsList/>
            <RewardsSlider/>
            <PartnersBlock/>
        </>
    )
}

export function PageHomeHeroBlock() {
    const [t] = useTranslation();
    return (
        <div>
            <section className="hero_warp" style={{backgroundImage: `url(${require("../../assets/images/hero_bg.jpg")})`}}>
                <div className="container">
                    <div className="row d-flex align-items-center height_vh">
                        <div className="col-md-12 col-12">
                            <div className="banner_content">
                                <h1 className="banner_title">{t('Viktoria')}<br/>{t('Adkozalova')}</h1>
                                <ul className="exp_list">
                                    <li className=" wow fadeInUp" data-wow-duration='0.5s'>{t('Oil')}</li>
                                    <li className=" wow fadeInUp" data-wow-duration='1s'>{t('Acrylic')}</li>
                                    <li className=" wow fadeInUp" data-wow-duration='1.5s'>{t('Enamel')}</li>
                                    <li className=" wow fadeInUp" data-wow-duration='2s'>{t('Graphic')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <SocialMediaList className="social_link"/>
                <div className="scroll_down">
                    <AnchorLink href="#projects">{t('Scroll Down')}</AnchorLink>
                </div>
            </section>
            <div className="height_vh dark_bg"></div>
        </div>
    );
}

export function PageHomeAboutBlock() {
    const [t] = useTranslation();
    const aboutLink = i18nTo("/about");
    return (
        <section className="about_wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Link to={aboutLink}><h2 className="about_title wow fadeInUp">{t("About Art")}</h2></Link>
                        <div className="about_content">
                            <div className="bg_text">
                                <h1 className="bg_strock_text" data-parallax='{"x": -150}'>Art</h1>
                            </div>
                            <h4>
                                <Trans i18nKey={"AboutShort.text"}>
                                    The theme of the artist's works is the theme of the <a href="https://en.wikipedia.org/wiki/Universe"
                                                                                           target={"_blank"}
                                                                                           rel="noopener noreferrer">Universe</a>.<br/>
                                    The paintings are made in the author's technique using an art reception - <a
                                    href="https://en.wikipedia.org/wiki/Grotesque" target={"_blank"} rel="noopener noreferrer">grotesque</a>, a
                                    combination of the fictional and real,
                                    parallel lines symbolize the essence of being and the endless flow forward, creating a reflection of <a
                                    href="https://en.wikipedia.org/wiki/String_theory" target={"_blank"} rel="noopener noreferrer">String Theory</a>.
                                </Trans>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
