import React from "react";
import SocialMediaList from "../Contacts/SocialMediaList";

export default function HeroPage(props) {
  const {img, title, description1, description2} = props;
  return (
      <section className="hero_warp inner_banner hero_warp_page" style={{backgroundImage: `url(${img})`}}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-12 col-12">
              <div className="banner_content">
                <h1 className="banner_title">{title}</h1>
                <p className="banner_para">{description1}</p>
                <p className="banner_para2">{description2}</p>
              </div>
            </div>
          </div>
        </div>
        <SocialMediaList className="social_link"/>
      </section>
  );
}
