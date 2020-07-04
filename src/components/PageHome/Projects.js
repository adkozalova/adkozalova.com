import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Projects extends Component {
  render() {
    return (
        <section className="portfolio_warp" id="projects">
          <div className="port_bg_text">
            <h1 className="bg_strock_text" data-parallax='{"x": -200}'>Projects</h1>
          </div>
          <div className="container">
            <div className="row portfolio_single_wrap">
              <div className="col-md-6 col-sm-12 col-xs-12 portfolio_single_item">
                <div className="portfolio_item">
                  <div className="port_img tilt">
                    <Link to="/black-and-white">
                      <img src="/images/project/black-and-white/black-and-white-main.jpg" alt="Project Black & White" className="img-fluid"/>
                    </Link>
                  </div>
                  <Link className="exp" to="/black-and-white">
                      <span className="exp_inner">
                        <span className="exp_hover">Explore</span>
                      </span>
                  </Link>
                  <div className="port_text">
                    <Link to="/black-and-white">
                      <h3 className="port_title">Black & White</h3>
                    </Link>
                    <p className="catagory">- oil, acrylic, canvas</p>
                  </div>

                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 portfolio_single_item portfolio_cus">
                <div className="portfolio_item">
                  <div className="port_img tilt">
                    <Link to="/jazzman">
                      <img src="/images/project/jazzman/jazzman-main.jpg" alt="Project Jazzman" className="img-fluid"/>
                    </Link>
                  </div>
                  <Link className="exp" to="/jazzman">
                    <span className="exp_inner">
                      <span className="exp_hover">Explore</span>
                    </span>
                  </Link>
                  <div className="port_text">
                    <Link to="/jazzman">
                      <h3 className="port_title">Jazzman</h3>
                    </Link>
                    <p className="catagory">- oil, acrylic, canvas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}
