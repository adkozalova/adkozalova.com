import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
import ScrollToTop from "./components/Common/ScrollToTop";
import HeaderMenu from './components/Block/HeaderMenu';
import Footer from './components/Block/Footer';
import GoToTop from "./components/Common/GoToTop";
import PageHome from "./components/Page/PageHome";
import PageAbout from "./components/Page/PageAbout";
import PageContacts from "./components/Page/PageContacts";
import PageRewards from "./components/Page/PageRewards";
import PageProjectFillingAndLiving from "./components/Page/PageProjectFillingAndLiving";
import PageProjectJazzman from "./components/Page/PageProjectJazzman";
import PageProjectBlackAndWhite from "./components/Page/PageProjectBlackAndWhite";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

export default function App() {
  const [t, i18n] = useTranslation();
  const baseRouteUrl = "/:locale(ua|en)?";
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
            <Route path={baseRouteUrl + "/black-and-white"} component={PageProjectBlackAndWhite}/>
            <Route path={baseRouteUrl + "/jazzman"} component={PageProjectJazzman}/>
            <Route path={baseRouteUrl + "/feeling-and-living"} component={PageProjectFillingAndLiving}/>
            <Route path={baseRouteUrl + "/rewards"} component={PageRewards}/>
            <Route path={baseRouteUrl + "/about"} component={PageAbout}/>
            <Route path={baseRouteUrl + "/contacts"} component={PageContacts}/>
            <Route path={baseRouteUrl + "/"} component={PageHome}/>
          </Switch>
          <Footer/>
          <ScrollToTop/>
        </Router>
        <GoToTop/>
      </div>
  );
}
