import React, {Component} from "react";
import SocialMediaList from "./SocialMediaList";

export default class Hero extends Component {
  render() {
    return (
        <section className="hero_warp inner_banner hero_warp_page" style={{backgroundImage: `url(${this.props.img})`}}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-12 col-12">
                <div className="banner_content">
                  <h1 className="banner_title">{this.props.title}</h1>
                  <p className="banner_para">{this.props.description1}</p>
                  <p className="banner_para2">{this.props.description2}</p>
                </div>
              </div>
            </div>
          </div>
          <SocialMediaList className="social_link"/>
        </section>
    )
  }
}
