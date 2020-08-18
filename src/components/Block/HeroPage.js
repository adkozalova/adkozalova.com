import React from "react";
import SocialMediaList from "../Common/SocialMediaList";
import {useTranslation} from "react-i18next";

export default function HeroPage(props) {
  const {img, title, description1, description2} = props;
  const [t] = useTranslation();
  return (
      <section className="hero_warp inner_banner hero_warp_page" style={{backgroundImage: `url(${img})`}}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-12 col-12">
              <div className="banner_content">
                <h1 className="banner_title">{t(title)}</h1>
                <p className="banner_para">{t(description1)}</p>
                <p className="banner_para2">{t(description2)}</p>
              </div>
            </div>
          </div>
        </div>
        <SocialMediaList className="social_link"/>
      </section>
  );
}
