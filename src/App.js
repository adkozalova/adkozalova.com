import React, {useEffect} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
// css
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.min.css';
import './assets/css/font-awesome-animation.min.css';
import './assets/css/themify-icons.css';
import './assets/css/elegant-icon-style.css';
import './assets/css/wow.css';
import './assets/css/style.css';
import './assets/css/components/rewards-content.css';
import './assets/css/components/rewards.css';
import './assets/css/components/credentials.css';
import './assets/css/components/hero.css';
import './assets/css/responsive.css';
// components
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import ScrollToTop from "./components/Common/ScrollToTop";
import HeaderMenu from './components/Common/HeaderMenu';
import Footer from './components/Common/Footer';
import GoToTop from "./components/Common/GoToTop";
import PageHome from "./components/Page/PageHome";
import PageAbout from "./components/Page/PageAbout";
import PageContacts from "./components/Page/PageContacts";
import PageRewards from "./components/Page/PageRewards";
import PageArtProjectFragile from "./components/Page/ArtProject/PageArtProjectFragile";
import PageArtworksGallery from "./components/Page/PageArtworksGallery";
import PageArtProjects from "./components/Page/PageArtProjects";
import PagePublicationsAndMedia from "./components/Page/PagePublicationsAndMedia";
import PagePublicationLandEscapeArtReview2021 from "./components/Page/Publication/PagePublicationLandEscapeArtReview2021";
import PagePublicationAlTiba9Issue07 from "./components/Page/Publication/PagePublicationAlTiba9Issue07";
import PageArtProjectAlone from "./components/Page/ArtProject/PageArtProjectAlone";
import PagePublicationArtMastersPart5 from "./components/Page/Publication/PagePublicationArtMastersPart5";
import PageArtProjectShadowsOfUnforgottenAncestors from "./components/Page/ArtProject/PageArtProjectShadowsOfUnforgottenAncestors";

export const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = false;
    document.body.appendChild(script);
}

export default function App() {
    const [t, i18n] = useTranslation();
    useEffect(() => {
        appendScript('/js/jquery-3.3.1.min.js')
        appendScript('/js/bootstrap.min.js')
        appendScript('/js/isotope.pkgd.min.js')
        appendScript('/js/imagesloaded.pkgd.min.js')
        appendScript('/js/wow.js')
        appendScript('/js/parallax-scroll.js')
        appendScript('/js/universal-tilt.js')
        appendScript('/js/main.js')
    })
    const baseRouteUrl = "/:locale(ua|en|de)?";
    return (
        <div id="top">
            <Helmet>
                <html lang={i18n.language}/>
                <title>{t('Adkozalova Viktoria | Official Website')}</title>
                <meta name="description" content={t('Welcome to the official website of professional artist Viktoria Adkozalova')}/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="theme-color" content="#000000"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://adkozalova.com/" + (i18n.language === "en" ? "" : i18n.language)}/>
                <meta property="og:title" content={t('Adkozalova Viktoria | Official Website')}/>
                <meta property="og:description" content={t('Welcome to the official website of professional artist Viktoria Adkozalova')}/>
                <meta property="og:image" content="https://adkozalova.com/images/og-image.png"/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:width" content="300"/>
                <meta property="og:image:height" content="227"/>
            </Helmet>
            <Router>
                <HeaderMenu/>
                <Switch>
                    <Route exact path={baseRouteUrl + "/"} component={PageHome}/>
                    <Route exact path={baseRouteUrl + "/artworks-gallery"} component={PageArtworksGallery}/>
                    <Route exact path={baseRouteUrl + "/art-projects"} component={PageArtProjects}/>
                    <Route exact path={baseRouteUrl + "/art-projects/alone"} component={PageArtProjectAlone}/>
                    <Route exact path={baseRouteUrl + "/art-projects/fragile"} component={PageArtProjectFragile}/>
                    <Route exact path={baseRouteUrl + "/art-projects/shadows-of-unforgotten-ancestors"} component={PageArtProjectShadowsOfUnforgottenAncestors}/>
                    <Route exact path={baseRouteUrl + "/publications-and-media"} component={PagePublicationsAndMedia}/>
                    <Route exact path={baseRouteUrl + "/publications-and-media/landescape-art-review-2021"} component={PagePublicationLandEscapeArtReview2021}/>
                    <Route exact path={baseRouteUrl + "/publications-and-media/al-tiba9-issue07"} component={PagePublicationAlTiba9Issue07}/>
                    <Route exact path={baseRouteUrl + "/publications-and-media/art-masters-part-5"} component={PagePublicationArtMastersPart5}/>
                    <Route exact path={baseRouteUrl + "/rewards"} component={PageRewards}/>
                    <Route exact path={baseRouteUrl + "/about"} component={PageAbout}/>
                    <Route exact path={baseRouteUrl + "/contacts"} component={PageContacts}/>
                    {/* added temporally to support old URLs, will be removed */}
                    <Redirect exact from={baseRouteUrl + "/black-and-white"} to={baseRouteUrl + "/artworks-gallery"}/>
                    <Redirect exact from={baseRouteUrl + "/jazzman"} to={baseRouteUrl + "/artworks-gallery"}/>
                    <Redirect exact from={baseRouteUrl + "/feeling-and-living"} to={baseRouteUrl + "/artworks-gallery"}/>
                    <Redirect exact from={baseRouteUrl + "/shadows-of-unforgotten-ancestors"} to={baseRouteUrl + "/artworks-gallery"}/>
                    <Redirect exact from={baseRouteUrl + "/personal-art-project-fragile"} to={baseRouteUrl + "/art-projects/fragile"}/>
                    {/**/}
                </Switch>
                <Footer/>
                <ScrollToTop/>
            </Router>
            <GoToTop/>
        </div>
    );
}
