import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class AboutShort extends Component {
  render() {
    return (
        <section className="about_wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Link to="/about"><h2 className="about_title wow fadeInUp">About Me</h2></Link>
                <div className="about_content">
                  <div className="bg_text">
                    <h1 className="bg_strock_text" data-parallax='{"x": -150}'>About</h1>
                  </div>
                  <h4>
                    I’m Viktoria, a <a href="https://en.wikipedia.org/wiki/Artist" target={"_blank"} rel="noopener noreferrer">professional artist</a> based in
                    Ukraine.<br/>
                    Specialize in <a href="https://en.wikipedia.org/wiki/Symbolism_(arts)" target={"_blank"} rel="noopener noreferrer">symbolism</a> style.<br/>
                    On my works you won't find specific persons, but instead everyone can find their friends, neighbors or even some moments from your own life.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}