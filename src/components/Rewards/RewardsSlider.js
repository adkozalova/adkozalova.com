import React from "react";
import Slider from "react-slick";
import '../../assets/css/slick.min.css';
import Country from "../Common/Country";
import {Link} from "react-router-dom";
import {i18nTo} from "../../Util";
import {useTranslation} from "react-i18next";
import RewardsData from "./RewardsData";

export default function RewardsSlider() {
  const [t] = useTranslation();
  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const rewardData = RewardsData()
  const rewardsLink = i18nTo("/rewards")
  return (
      <section className="rewards_wrap">
        <div className="bg_text">
          <h1 className="bg_strock_text" data-parallax='{"x": -200}'>{t('Rewards')}</h1>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="rewards_left">
                <Link to={rewardsLink}><h2 className="rewards_title wow fadeInUp">{t('Rewards')}</h2></Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="rewards_slider">
                <Slider {...sliderSettings}>
                  {rewardData.map((reward, key) => {
                    const {
                      src,
                      title,
                      description,
                      country,
                      year
                    } = reward;
                    const alt = title + ": " + description;
                    return (
                        <div className="row" key={key}>
                          <div className="col-md-4 img_wrap">
                            <Link to={rewardsLink}><img className="img-fluid img-thumbnail" src={src} alt={alt}/></Link>
                          </div>
                          <div className="col-md-8 description_wrap">
                            <h3 className="title">{title}</h3>
                            <p className="description">{description}</p>
                            <h5 className="country">{country.map(countryCode => <Country code={countryCode} onlyFlag={true}/>)}</h5>
                            <h6 className="year">{year}</h6>
                          </div>
                        </div>
                    )
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
