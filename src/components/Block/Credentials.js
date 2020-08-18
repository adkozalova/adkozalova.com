import React from "react";

import Country from "../Common/Country";

export default function Credentials() {
  return (
      <section className="credentials_wrap">

        <div className="bg_text">
          <h1 className="bg_strock_text" data-parallax='{"x": 200}'>Credentials</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2 className="credentials_title wow fadeInUp">My Credentials</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 col-md-4 col-sm-12 col-12">
              <ul className="nav nav-tabs credentials_tab">
                <li className="nav-item wow fadeInUp">
                  <a className="nav-link active" data-toggle="tab" href="#CurrentExhibitions">Current Exhibitions</a>
                </li>
                <li className="nav-item wow fadeInUp">
                  <a className="nav-link" data-toggle="tab" href="#GroupExhibitions">Group Exhibitions</a>
                </li>
                <li className="nav-item wow fadeInUp">
                  <a className="nav-link" data-toggle="tab" href="#SoloExhibitions">Solo Exhibitions</a>
                </li>
                <li className="nav-item wow fadeInUp">
                  <a className="nav-link" data-toggle="tab" href="#Prizes">Prizes</a>
                </li>
                <li className="nav-item wow fadeInUp">
                  <a className="nav-link" data-toggle="tab" href="#Publications">Publications</a>
                </li>
                <li className="nav-item wow fadeInUp">
                  <a className="nav-link" data-toggle="tab" href="#Residences">Residences</a>
                </li>
                <li className="nav-item wow fadeInUp">
                  <a className="nav-link" data-toggle="tab" href="#PrivateCollections">Private Collections</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-7 col-md-8 col-sm-12 col-12">
              <div className="tab-content credentials_tab_content">

                <div className="tab-pane fade show active" id="CurrentExhibitions">
                  <ul>
                    <li><span>August 2020</span><a
                        href="http://www.contemporaryartcuratormagazine.com/online-exhibition-new-horizons/viktoria-adkozalova"
                        target={"_blank"} rel="noopener noreferrer"
                    >
                      Online Exhibition “New Horizons” by Contemporary Art Curator Magazine
                    </a></li>
                    <li><span>August 2020</span><a
                        href="https://www.camelbackgallery.com/figurative2020exhibition?pgid=kdf6heie1-da60118f-c4d0-43b5-9045-cd611519da15"
                        target={"_blank"} rel="noopener noreferrer"
                    >
                      International Juried Painting Competition “Figurative” 2020 Camelback Gallery
                    </a></li>
                  </ul>
                </div>

                <div className="tab-pane fade show" id="GroupExhibitions">
                  <ul>
                    <li><span>2020</span>A Look Through the Backstage / Kyiv History Museum - Kyiv, Ukraine</li>
                    <li><span>2019</span>A4, ballpoin, A4 ballpoint pen / Karas Gallery - Kyiv, Ukraine</li>
                    <li><span>2019</span>"Agenda" contemporary women`s art fest / Institute of Contemporary Art Problems - Kyiv, Ukraine</li>
                    <li><span>2019</span>Windows Exhibition / Kyiv History Museum - Kyiv, Ukraine</li>
                    <li><span>2018</span>Without Borders / Kyiv Fortress Museum - Kyiv, Ukraine</li>
                    <li><span>2018</span>A4, ballpoint / Karas Gallery - Kyiv, Ukraine</li>
                    <li><span>2018</span>International collective exhibition "Four seasons" INSHE Art / Museum Kiev Fortress - Kyiv, Ukraine</li>
                    <li><span>2018</span>Blockchain Art Hackathon 2.0 International Project / Congress and Exhibition Center "Parkovy" - Kyiv, Ukraine</li>
                    <li><span>2018</span>Folk Ukraine. Pysanka 2018 / Sofiyivska Square - Kyiv, Ukraine</li>
                    <li><span>2018</span>The Infinity of Dreams / National House of Artist of Ukraine - Kyiv, Ukraine</li>
                    <li><span>2018</span>International exhibition "Ukrainian Art Week" / National House of Artist - Kyiv, Ukraine</li>
                  </ul>
                </div>

                <div className="tab-pane fade" id="SoloExhibitions">
                  <ul>
                    <li><span>2019</span><a
                        href="https://inshe.org/inshe-art-personalnaya-vystavka-rabot-art-professionala-viktorii-adkozalovoj/"
                        target={"_blank"} rel="noopener noreferrer"
                    >
                      INSHE ART / Kyiv Fortress Museum - Kyiv, Ukraine
                    </a></li>
                  </ul>
                </div>

                <div className="tab-pane fade" id="Prizes">
                  <ul>
                    <li><span>2019</span>WITHOUT BORDERS - First prize - Kyiv, Ukraine</li>
                    <li><span>2018</span>Ukrainian Art Week - First prize - Kyiv, Ukraine</li>
                  </ul>
                </div>

                <div className="tab-pane fade" id="Publications">
                  <ul>
                    <li><span>2020</span><a href="https://www.facebook.com/UAFRA1/posts/2738393589529633" target={"_blank"} rel="noopener noreferrer">
                      UAFRA - Viktoria Adkozalova - ПОГЛЯД КРІЗЬ ЛАШТУНКИ
                    </a></li>
                    <li><span>2020</span><a href="http://culturetrend-magazine.com/adkozalova" target={"_blank"} rel="noopener noreferrer">
                      Magazine CultureTrend - Viktoria Adkozalova
                    </a></li>
                    <li><span>2019</span><a href="https://www.youtube.com/watch?v=Bri9OkdlIWw" target={"_blank"} rel="noopener noreferrer">
                      Dmitro Subotenko - Ukrainian Contemporary Women’s Art Fest 2019
                    </a></li>
                    <li><span>2019</span>
                      <a
                          href="https://inshe.org/inshe-art-1934-j-mezhdunarodnyj-master-klass-art-professional-dekabr-2019-goda-video/"
                          target={"_blank"}
                          rel="noopener noreferrer"
                      >
                        INSHE ART — 1934-й Международный Мастер-класс ART PROFESSIONAL
                      </a></li>
                  </ul>
                </div>

                <div className="tab-pane fade" id="Residences">
                  <ul>
                    <li><span>2018</span>Blockchain Art Hackathon 2.0 International Project / Congress and Exhibition Center "Parkovy" - Kyiv, Ukraine</li>
                  </ul>
                </div>

                <div className="tab-pane fade" id="PrivateCollections">
                  <ul>
                    <li><Country code="us"/></li>
                    <li><Country code="hk"/></li>
                    <li><Country code="fi"/></li>
                    <li><Country code="hu"/></li>
                    <li><Country code="at"/></li>
                    <li><Country code="de"/></li>
                    <li><Country code="pl"/></li>
                    <li><Country code="ua"/></li>
                    <li><Country code="ru"/></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
