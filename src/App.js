import React, {Component} from 'react';
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
                  <PageProjectBlackAndWhite/>
                </Route>
                <Route path="/jazzman">
                  <PageProjectJazzman/>
                </Route>
                <Route path="/feeling-and-living">
                  <PageProjectFillingAndLiving/>
                </Route>
                <Route path="/rewards">
                  <PageRewards/>
                </Route>
                <Route path="/about">
                  <PageAbout/>
                </Route>
                <Route path="/contacts">
                  <PageContacts/>
                </Route>
                <Route path="/">
                  <PageHome/>
                </Route>
              </Switch>
              <Footer/>
            </ScrollToTop>
          </Router>
          <GoToTop/>
        </div>
    );
  }
}
