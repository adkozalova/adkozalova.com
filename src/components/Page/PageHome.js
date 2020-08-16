import React, {Component} from 'react';
import PageHomeProjects from "../Block/Projects";
import Credentials from "../Block/Credentials";
import RewardsSlider from "../Block/RewardsSlider";
import Partners from "../Block/Partners";
import AboutShort from "../Block/AboutShort";
import HeroHome from "../Block/HeroHome";

export default class PageRewardsContent extends Component {
  render() {
    return (
        <>
          <HeroHome/>
          <PageHomeProjects/>
          <AboutShort/>
          <Credentials/>
          <RewardsSlider/>
          <Partners/>
        </>
    )
  }
}