import React from "react";
import {Link} from "react-router-dom";
import {i18nTo} from "../../Util";
import {Trans, useTranslation} from "react-i18next";

export default function AboutShort() {
  const [t] = useTranslation();
  const aboutLink = i18nTo("/about");
  return (
      <section className="about_wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to={aboutLink}><h2 className="about_title wow fadeInUp">{t("About Art")}</h2></Link>
              <div className="about_content">
                <div className="bg_text">
                  <h1 className="bg_strock_text" data-parallax='{"x": -150}'>Art</h1>
                </div>
                <h4>
                  <Trans i18nKey={"AboutShort.text"}>
                    The theme of the artist's works is the theme of the <a href="https://en.wikipedia.org/wiki/Universe" target={"_blank"} rel="noopener noreferrer">Universe</a>.<br/>
                    The paintings are made in the author's technique using an art reception - <a href="https://en.wikipedia.org/wiki/Grotesque" target={"_blank"} rel="noopener noreferrer">grotesque</a>, a combination of the fictional and real,
                    parallel lines symbolize the essence of being and the endless flow forward, creating a reflection of <a href="https://en.wikipedia.org/wiki/String_theory" target={"_blank"} rel="noopener noreferrer">String Theory</a>.
                  </Trans>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
