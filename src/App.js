import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
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
import * as Config from './Config';
import ScrollToTop from "./components/Common/ScrollToTop";
import HeaderMenu from './components/Common/HeaderMenu';
import Footer from './components/Common/Footer';
import Partners from './components/Common/Partners';
import Hero from "./components/Common/Hero";
import Gallery from "./components/Common/Gallery";
import Contact from "./components/PageContact/Contact";
import GoToTop from "./components/Common/GoToTop";

import PageHomeHero from './components/PageHome/Hero';
import PageHomeProjects from './components/PageHome/Projects';
import PageHomeAbout from './components/PageHome/About';
import PageHomeCredentials from './components/PageHome/Credentials';
import PageHomeRewards from './components/PageHome/Rewards';

import PageAboutContent from "./components/PageAbout/Content";

import PageRewardsContent from "./components/PageRewards/Content";

export const appendScript = (scriptToAppend) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = false;
  document.body.appendChild(script);
}

export default class App extends Component {

  componentDidMount() {
    appendScript('js/jquery-3.3.1.min.js')
    appendScript('js/bootstrap.min.js')
    appendScript('js/isotope.pkgd.min.js')
    appendScript('js/imagesloaded.pkgd.min.js')
    appendScript('js/wow.js')
    appendScript('js/parallax-scroll.js')
    appendScript('js/universal-tilt.js')
    appendScript('js/main.js')
  }

  render() {
    return (
        <div id="top">
          <Router>
            <ScrollToTop>
            <HeaderMenu/>
            <Switch>
              <Route path="/watercolor">
                <Hero
                    title="Watercolor"
                    description="St.Cuthberts Mill Saunders Waterford High white HP. Wet-In-Wet Watercolor Painting."
                    img="/images/project/watercolor/watercolor-bg.jpg"
                />
                <Gallery items={Config.ProjectWatercolorItems}/>
              </Route>
              <Route path="/black-and-white">
                <Hero
                    title="Black & White"
                    description="Symbolism style. Author's technique. Oil, acrylic, canvas."
                    img="/images/project/black-and-white/black-and-white-bg.jpg"
                />
                <Gallery items={Config.ProjectBlackAndWhiteItems}/>
              </Route>
              <Route path="/sketch">
                <Hero
                    title="Sketch"
                    description="Graphics. Mixed technique."
                    img="/images/project/sketch/sketch-bg.jpg"
                />
                <Gallery items={Config.ProjectSketchItems}/>
              </Route>
              <Route path="/jazzman">
                <Hero
                    title="Jazzman"
                    description="Modern art. Author's technique. Oil, acrylic, canvas."
                    img="/images/project/jazzman/jazzman-bg.jpg"
                />
                <Gallery items={Config.ProjectJazzmanItems}/>
              </Route>
              <Route path="/rewards">
                <Hero
                    title="Rewards"
                    description=""
                    img="/images/page-hero-bg.jpg"
                />
                <PageRewardsContent/>
              </Route>
              <Route path="/about">
                <Hero
                    title="About Me"
                    description="Pictorial art is a frozen unique moment"
                    img="/images/page-hero-bg.jpg"
                />
                <PageAboutContent/>
                <PageHomeRewards/>
                <PageHomeCredentials/>
              </Route>
              <Route path="/contacts">
                <Hero
                    title="Contacts"
                    description="A symbol always reflects the reality"
                    img="/images/page-hero-bg.jpg"
                />
                <Contact/>
              </Route>
              <Route path="/">
                <PageHomeHero/>
                <PageHomeProjects/>
                <PageHomeAbout/>
                <PageHomeCredentials/>
                <PageHomeRewards/>
                <Partners/>
              </Route>
            </Switch>
            </ScrollToTop>
          </Router>
          <Footer/>
          <GoToTop/>
        </div>
    );
  }
}
