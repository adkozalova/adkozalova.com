import React from "react";
import {useTranslation} from "react-i18next";
import SocialMediaList from "../Common/SocialMediaList";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function HeroHome() {
  const [t] = useTranslation();
  return (
      <div>
        <section className="hero_warp">
          <div className="container">
            <div className="row d-flex align-items-center height_vh">
              <div className="col-md-12 col-12">
                <div className="banner_content">
                  <h1 className="banner_title">{t("Viktoria")}<br/>{t("Adkozalova")}</h1>
                  <ul className="exp_list">
                    <li className=" wow fadeInUp" data-wow-duration='0.5s'>{t("Oil")}</li>
                    <li className=" wow fadeInUp" data-wow-duration='1s'>{t("Acrylic")}</li>
                    <li className=" wow fadeInUp" data-wow-duration='1.5s'>{t("Watercolor")}</li>
                    <li className=" wow fadeInUp" data-wow-duration='2s'>{t("Graphic")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <SocialMediaList className="social_link"/>
          <div className="scroll_down">
            <AnchorLink href="#projects">{t("Scroll Down")}</AnchorLink>
          </div>
        </section>
        <div className="height_vh dark_bg"></div>
      </div>
  );
}
