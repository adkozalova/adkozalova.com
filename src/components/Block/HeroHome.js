import React, {Component} from 'react';
import SocialMediaList from "../Common/SocialMediaList";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class HeroHome extends Component {
  render() {
    return (
        <div>
          <section className="hero_warp">
            <div className="container">
              <div className="row d-flex align-items-center height_vh">
                <div className="col-md-12 col-12">
                  <div className="banner_content">
                    <h1 className="banner_title">Viktoria<br/>Adkozalova</h1>
                    <ul className="exp_list">
                      <li className=" wow fadeInUp" data-wow-duration='0.5s'>Oil</li>
                      <li className=" wow fadeInUp" data-wow-duration='1s'>Acrylic</li>
                      <li className=" wow fadeInUp" data-wow-duration='1.5s'>Watercolor</li>
                      <li className=" wow fadeInUp" data-wow-duration='2s'>Graphic</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <SocialMediaList className="social_link"/>
            <div className="scroll_down">
              <AnchorLink href="#projects">Scroll Down</AnchorLink>
            </div>
          </section>
          <div className="height_vh dark_bg"></div>
        </div>
    );
  }
}
