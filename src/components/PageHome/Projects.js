import React, {Component} from 'react';

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
                    <a href="/#/black-and-white">
                      <img src="/images/project/black-and-white/black-and-white-main.jpg" alt="Black & White" className="img-fluid"/>
                    </a>
                  </div>
                  <a className="exp" href="/#/black-and-white">
                      <span className="exp_inner">
                        <span className="exp_hover">Explore</span>
                      </span>
                  </a>
                  <div className="port_text">
                    <a href="/#/black-and-white">
                      <h3 className="port_title">Black & White</h3>
                    </a>
                    <p className="catagory">- oil, canvas</p>
                  </div>

                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 portfolio_single_item portfolio_cus">
                <div className="portfolio_item">
                  <div className="port_img tilt">
                    <a href="/#/jazzman">
                      <img src="/images/project/jazzman/jazzman-main.jpg" alt="img" className="img-fluid"/>
                    </a>
                  </div>
                  <a className="exp" href="/#/jazzman">
                    <span className="exp_inner">
                      <span className="exp_hover">Explore</span>
                    </span>
                  </a>
                  <div className="port_text">
                    <a href="/#/jazzman">
                      <h3 className="port_title">Jazzman</h3>
                    </a>
                    <p className="catagory">- oil, canvas</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 portfolio_single_item portfolio_cus">
                <div className="portfolio_item">
                  <div className="port_img tilt">
                    <a href="/#/sketch">
                      <img src="/images/project/sketch/sketch-main.jpg" alt="img" className="img-fluid"/>
                    </a>
                  </div>
                  <a className="exp" href="/#/sketch">
                    <span className="exp_inner">
                      <span className="exp_hover">Explore</span>
                    </span>
                  </a>
                  <div className="port_text">
                    <a href="/#/sketch">
                      <h3 className="port_title">Sketch</h3>
                    </a>
                    <p className="catagory">- graphics</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 portfolio_single_item">
                <div className="portfolio_item">
                  <div className="port_img tilt">
                    <a href="/#/watercolor">
                      <img src="/images/project/watercolor/watercolor-main.jpg" alt="img" className="img-fluid"/>
                    </a>
                  </div>
                  <a className="exp" href="/#/watercolor">
                    <span className="exp_inner">
                      <span className="exp_hover">Explore</span>
                    </span>
                  </a>
                  <div className="port_text">
                    <a href="/#/watercolor">
                      <h3 className="port_title">Watercolor</h3>
                    </a>
                    <p className="catagory">- watercolor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}
