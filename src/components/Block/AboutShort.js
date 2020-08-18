import React from "react";
import {Link} from "react-router-dom";
import {i18nTo} from "../../Util";
import {Trans, useTranslation} from "react-i18next";
import i18n from "i18next";

export default function AboutShort() {
  const [t] = useTranslation();
  const aboutLink = i18nTo("/about");
  const links = i18n.language === "en"
      ? {
        artist: "https://en.wikipedia.org/wiki/Artist",
        symbolism: "https://en.wikipedia.org/wiki/Symbolism_(arts)"
      }
      : {
        artist: "https://uk.wikipedia.org/wiki/%D0%9C%D0%B8%D1%82%D0%B5%D1%86%D1%8C",
        symbolism: "https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D1%96%D0%B7%D0%BC"
      }
  return (
      <section className="about_wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to={aboutLink}><h2 className="about_title wow fadeInUp">{t("About Me")}</h2></Link>
              <div className="about_content">
                <div className="bg_text">
                  <h1 className="bg_strock_text" data-parallax='{"x": -150}'>About</h1>
                </div>
                <h4>
                  <Trans i18nKey={"AboutShort.text"}>
                    I’m Viktoria, a <a href={links.artist} target={"_blank"} rel="noopener noreferrer">professional artist</a> based in
                    Ukraine.<br/>
                    Specialize in <a href={links.symbolism} target={"_blank"} rel="noopener noreferrer">symbolism</a> style.<br/>
                    On my works you won't find specific persons, but instead everyone can find their friends, neighbors or even some moments from your own life.
                  </Trans>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
