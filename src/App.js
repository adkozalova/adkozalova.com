import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
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
                <Route path="/black-and-white">
                  <Hero
                      title="Black & White"
                      description1="Symbolism style. Author's technique. Oil, acrylic on canvas."
                      description2="The main line in the author’s works is the image of a woman.
The paintings are done in black & white colors similar to old photos, like a memory or an accidentally remembered fragment.
This art is about that nothing happens by chance in the world.  Everything that has happened and will happen can extremely change our life, our plans, and ourselves.  You need to be more attentive to life.  Be thankful for everything that happens.
The main task facing the author is to carefully preserve the sensations, subtle feelings, and life itself in its unsurpassed moments."
                      img="/images/project/black-and-white/black-and-white-bg.jpg"
                  />
                  <Gallery items={Config.ProjectBlackAndWhiteItems}/>
                </Route>
                <Route path="/jazzman">
                  <Hero
                      title="Jazzman"
                      description1="Modern art. Author's technique. Oil, acrylic on canvas."
                      description2="Jazz is freedom, in music and life. It consists of weightlessness and continuous forward movement sensations.
On these artworks, the main one is a musician who connects with his instrument like is one whole.
The colored ragged background emphasizes freedom."
                      img="/images/project/jazzman/jazzman-bg.jpg"
                  />
                  <Gallery items={Config.ProjectJazzmanItems}/>
                </Route>
                <Route path="/feeling-and-living">
                  <Hero
                      title="Feeling & Living"
                      description1="Symbolism style. Author's technique. Oil, acrylic, enamel on canvas."
                      description2="The main line in the author’s works is the image of a life full of feels.
The paintings are done in black & white colors similar to old photos, like a memory or an accidentally remembered fragment.
This art is about that nothing happens by chance in the world.  Everything that has happened and will happen can extremely change our life, our plans, and ourselves.  You need to be more attentive to life.  Be thankful for everything that happens.
The main task facing the author is to carefully preserve the sensations, subtle feelings, and life itself in its unsurpassed moments."
                      img="/images/project/feeling-and-living/feeling-and-living-bg.jpg"
                  />
                  <Gallery items={Config.ProjectFillingAndLivingItems}/>
                </Route>
                <Route path="/rewards">
                  <Hero
                      title="Rewards"
                      description1=""
                      img="/images/page-hero-bg.jpg"
                  />
                  <PageRewardsContent/>
                </Route>
                <Route path="/about">
                  <Hero
                      title="About Me"
                      description1="Pictorial art is a frozen unique moment"
                      img="/images/page-hero-bg.jpg"
                  />
                  <PageAboutContent/>
                  <PageHomeRewards/>
                  <PageHomeCredentials/>
                </Route>
                <Route path="/contacts">
                  <Hero
                      title="Contacts"
                      description1="A symbol always reflects the reality"
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
