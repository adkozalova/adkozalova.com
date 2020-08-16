import React, {Component} from 'react';
import PageRewardsContent from "./PageRewardsContent";
import HeroPage from "../Block/HeroPage";

export default class PageRewards extends Component {
  render() {
    return (
        <>
          <HeroPage
              title="Rewards"
              description1=""
              img="/images/page-hero-bg.jpg"
          />
          <PageRewardsContent/>
        </>
    )
  }
}