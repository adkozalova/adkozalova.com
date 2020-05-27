import React, {Component} from "react";

export default class About extends Component {
  render() {
    return (
        <section className="about_wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="about_title wow fadeInUp">About Me</h2>
                <div className="about_content">
                  <div className="bg_text">
                    <h1 className="bg_strock_text" data-parallax='{"x": -150}'>About</h1>
                  </div>
                  <h4 className="wow fadeInUp" data-wow-delay="0.5s">
                    I’m Viktoria, a <a href="https://en.wikipedia.org/wiki/Artist" target={"_blank"} rel="noopener noreferrer">professional artist</a> based in
                    Ukraine.<br/>
                    Specialize in <a href="https://en.wikipedia.org/wiki/Symbolism_(arts)" target={"_blank"} rel="noopener noreferrer">symbolism</a> and <a
                      href="https://en.wikipedia.org/wiki/Realism_(arts)" target={"_blank"} rel="noopener noreferrer">realism</a> styles.<br/>
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
