import React, {Component} from "react";
import SocialMediaList from "../Common/SocialMediaList";

export default class Content extends Component {
  render() {
    return (
        <section className="blog_wrap blog_single_wrap">
          <div className="container">
            <div className="row justify-content-center">

              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="blog_sidebar">
                  <div className="widget sidebar-widget widget_about">
                    <div className="sidebar_about_img text-center">
                      <img src="/images/about/author.jpg" alt="img" className="img-fluid"/>
                    </div>
                    <div className="sidebar_about_content">
                      <h4 className="text-center sidebar_ab_title">Viktoria Adkozalova</h4>
                      <p className="text-center sidebar_ab_details">On my works you won't find specific persons, but instead everyone can find their friends,
                        neighbors or even some moments from your own life.</p>
                      <div className="sign text-center">
                        <img src="/images/about/author-signature.png" alt="img" className="img-fluid"/>
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

                    <h3 className="blog_inner_title">Business is the activity of making one’s</h3>
                    <p>Filix was outstanding! I was looking for a professional to design and develop my new website for my recipe blog. I searched for long,
                      failed to choose a suitable lne until I found Filix. I searched for long, failed to choose a suitable lne until I found Filix.</p>

                    <p>Filix was outstanding! I was looking for a professional to design and develop my new website for my recipe blog. I searched for long,
                      failed to choose a suitable lne until I found Filix. I searched for </p>

                    <div className="blog_simg_img">
                      <img src="/images/about/post_single_img.jpg" className="img-fluid" alt="img"/>
                    </div>

                    <h3 className="blog_inner_title">The Reward System</h3>
                    <p>Filix was outstanding! I was looking for a professional to design and develop my new website for my recipe blog. I searched for long,
                      failed to choose a suitable lne until I found Filix. I searched for long, failed to choose a suitable lne until I found Filix. </p>

                    <blockquote>
                      <p>“If you want to succeed, surround yourself with the right kind of people who will support and encourage you all the way.”</p>
                    </blockquote>

                    <p>I was looking for a professional to design and develop my new website for my recipe blog. I searched for long, failed to choose a
                      suitable lne until I found Filix. I searched for long, failed to choose a suitable lne until I found Filix.</p>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
    );
  }
}