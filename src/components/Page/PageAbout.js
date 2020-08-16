import React, {Component} from "react";
import RewardsSlider from "../Block/RewardsSlider";
import Credentials from "../Block/Credentials";
import HeroPage from "../Block/HeroPage";
import PageAboutContent from "./PageAboutContent";

export default class PageAbout extends Component {
  render() {
    return (
        <>
          <HeroPage
              title="AboutShort Me"
              description1="Pictorial art is a frozen unique moment"
              img="/images/page-hero-bg.jpg"
          />
          <PageAboutContent/>
          <RewardsSlider/>
          <Credentials/>
        </>
    );
  }
}