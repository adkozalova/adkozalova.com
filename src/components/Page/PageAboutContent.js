import React from "react";
import SocialMediaList from "../Common/SocialMediaList";

export default function PageAboutContent() {
  return (
      <section className="blog_wrap blog_single_wrap">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="blog_sidebar">
                <div className="widget sidebar-widget widget_about">
                  <div className="sidebar_about_img text-center">
                    <img src="/images/about/author.jpg" alt="Painter Viktoria Adkozalova" className="img-fluid"/>
                  </div>
                  <div className="sidebar_about_content">
                    <h4 className="text-center sidebar_ab_title">Viktoria Adkozalova</h4>
                    <p className="text-center sidebar_ab_details">On my works you won't find specific persons, but instead everyone can find their friends,
                      neighbors or even some moments from your own life.</p>
                    <div className="sign text-center">
                      <img src="/images/about/author-signature.png" alt="Painter Viktoria Adkozalova Signature" className="img-fluid"/>
                    </div>
                  </div>
                  <div className="follow">
                    <h4 className="follow_title text-center">Follow me on</h4>
                    <SocialMediaList className="follow_link text-center"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="blog_content blog_single_content">
                <div className="blog_single_item">

                  <h3 className="blog_inner_title">Victoria Adkozalova - Ukrainian artist, works in the symbolism style</h3>
                  <br/>
                  <p>Victoria was born on 3 October, 1987 in Feodosia.</p>

                  <p>From early childhood, she beloved fine art and artistic creativity. One of the sources of her inspiration were landscapes painted from
                    nature of the native Crimea.</p>

                  <p>In 2002, Victoria graduated from the Aivazovsky Art School, taking the first step in her career.</p>

                  <p>The next stage in the formation of Victoria was at the Kherson National Technical University, where she studied design and painting under
                    the guidance of the famous <a className="stretched-link text-info" href="https://www.saatchiart.com/sorokhan" target={"_blank"}
                                                  rel="noopener noreferrer">Ukrainian artist Galina Sorokhan</a>.<br/>
                    In her student years, Victoria tirelessly shows her creative abilities, taking part in various art exhibitions.</p>

                  <p>Since 2009, she has been actively engaged in profession art activities and studied at the National Pedagogical University named after
                    Drahomanov with a degree in Musical Art.</p>

                  <p>Victoria is a participant and winner of various art exhibitions, many of which were organized outside of Ukraine. The theme of the
                    exhibitions is also diverse, which allows us to talk about Victoria as a multifaceted, comprehensively developed artist, familiar with the
                    fullness of the visual genres.</p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}