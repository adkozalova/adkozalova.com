import React, {Component} from "react";
import Slider from "react-slick";
import './../../assets/css/slick.min.css';
import './rewards.css';

export default class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSlider: null,
      descriptionSlider: null
    };
  }

  componentDidMount() {
    this.setState({
      imageSlider: this.imageSlider,
      descriptionSlider: this.descriptionSlider
    });
  }

  render() {
    const imageSettings = {
      asNavFor: this.state.descriptionSlider,
      ref: slider => (this.imageSlider = slider),
      dots: false,
      arrows: false,
      // autoplay: true,
      infinite: true,
      vertical: true,
      centerMode: true,
      centerPadding: 0,
      verticalSwiping: true,
      focusOnSelect: true,
      speed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const descriptionSettings = {
      asNavFor: this.state.imageSlider,
      ref: slider => (this.descriptionSlider = slider),
      dots: false,
      arrows: false,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const {
      rewards
    } = this.props;
    return (
        <section className="rewards_wrap">
          <div className="bg_text">
            <h1 className="bg_strock_text" data-parallax='{"x": -200}'>Rewards</h1>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="test_left">
                  <h2 className="test_title wow fadeInUp">Rewards</h2>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-12 col-12">
                <div className="user_img_slider">
                  <Slider {...imageSettings}>
                    {rewards.map((reward, key) => {
                      const {
                        src,
                        title,
                      } = reward;
                      return (
                          <div className="user_slider_item" key={key}>
                            <div className="img_wrap"><img src={src} alt={title} className="img-fluid"/></div>
                          </div>
                      )
                    })}
                  </Slider>
                </div>
              </div>
              <div className="col-lg-5 col-md-8 col-sm-12 col-12">
                <div className="test_details_slider">
                  <Slider {...descriptionSettings}>
                    {rewards.map((reward, key) => {
                      const {
                        title,
                        description,
                        country,
                        year
                      } = reward;
                      return (
                          <div className="test_details_slider_item" key={key}>
                            <h3 className="slider_title">{title}</h3>
                            <p>{description}</p>
                            <h5 className="autor_name">{country}</h5>
                            <h6 className="autor_title">{year}</h6>
                          </div>
                      )
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}
